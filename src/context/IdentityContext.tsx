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
  name: string;
  vision: string;
  actions: string[];
  votes: number;
  createdAt: string;
  lastVotedDate?: string;
};

type IdentityContextType = {
  identities: Identity[];
  addIdentity: (
    name: string,
    vision: string,
    actions: string[]
  ) => void;
  castVote: (id: string) => void;
};

const IdentityContext = createContext<
  IdentityContextType | undefined
>(undefined);

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

  function addIdentity(
    name: string,
    vision: string,
    actions: string[]
  ) {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    const newIdentity: Identity = {
      id: Date.now().toString(),
      name: trimmedName,
      vision: vision.trim(),
      actions,
      votes: 0,
      createdAt: new Date().toISOString(),
      lastVotedDate: undefined,
    };

    setIdentities((previous) => [
      ...previous,
      newIdentity,
    ]);
  }

  function castVote(id: string) {
    const today = new Date().toDateString();

    setIdentities((previous) =>
      previous.map((identity) => {
        if (identity.id !== id) {
          return identity;
        }

        if (identity.lastVotedDate === today) {
          return identity;
        }

        return {
          ...identity,
          votes: identity.votes + 1,
          lastVotedDate: today,
        };
      })
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