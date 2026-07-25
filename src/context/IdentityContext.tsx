import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import {
    loadIdentities,
    saveIdentities,
} from "../services/storage";

export type Identity = {
  id: string;
  title: string;
  stage: string;
  votes: number;
};

type IdentityContextType = {
  identities: Identity[];
  addIdentity: (title: string) => void;
};

const IdentityContext = createContext<IdentityContextType | undefined>(
  undefined
);

export function IdentityProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [identities, setIdentities] = useState<Identity[]>([]);

  useEffect(() => {
    async function fetchIdentities() {
      const saved = await loadIdentities();

      if (saved.length > 0) {
        setIdentities(saved);
      }
    }

    fetchIdentities();
  }, []);

  useEffect(() => {
    saveIdentities(identities);
  }, [identities]);

  function addIdentity(title: string) {
    const newIdentity: Identity = {
      id: Date.now().toString(),
      title,
      stage: "🌱 Seed",
      votes: 0,
    };

    setIdentities((previous) => [...previous, newIdentity]);
  }

  return (
    <IdentityContext.Provider
      value={{
        identities,
        addIdentity,
      }}
    >
      {children}
    </IdentityContext.Provider>
  );
}

export function useIdentities() {
  const context = useContext(IdentityContext);

  if (!context) {
    throw new Error(
      "useIdentities must be used inside IdentityProvider"
    );
  }

  return context;
}