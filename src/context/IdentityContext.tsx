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
  castVote: (id: string) => void;
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
      setIdentities(saved);
    }

    fetchIdentities();
  }, []);

  useEffect(() => {
    saveIdentities(identities);
  }, [identities]);

  function addIdentity(title: string) {
    const trimmed = title.trim();

    if (!trimmed) return;

    const newIdentity: Identity = {
      id: Date.now().toString(),
      title: trimmed,
      stage: "🌱 Seed",
      votes: 0,
    };

    setIdentities((previous) => [...previous, newIdentity]);
  }

  function castVote(id: string) {
    setIdentities((previous) =>
      previous.map((identity) =>
        identity.id === id
          ? {
              ...identity,
              votes: identity.votes + 1,
            }
          : identity
      )
    );
  }

  return (
    <IdentityContext.Provider
      value={{
        identities,
        addIdentity,
        castVote,
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