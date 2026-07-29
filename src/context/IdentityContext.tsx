import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  loadIdentities,
  loadSelectedIdentity,
  saveIdentities,
  saveSelectedIdentity,
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
  selectedIdentityId: string | null;
  selectedIdentity: Identity | undefined;

  addIdentity: (
    name: string,
    vision: string,
    actions: string[]
  ) => void;

  castVote: (id: string) => void;

  selectIdentity: (id: string) => void;
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
  const [selectedIdentityId, setSelectedIdentityId] =
    useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      const savedIdentities = await loadIdentities();
      const savedSelectedIdentity =
        await loadSelectedIdentity();

      setIdentities(savedIdentities);

      if (
        savedSelectedIdentity &&
        savedIdentities.some(
          (i) => i.id === savedSelectedIdentity
        )
      ) {
        setSelectedIdentityId(savedSelectedIdentity);
      } else if (savedIdentities.length > 0) {
        setSelectedIdentityId(savedIdentities[0].id);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    saveIdentities(identities);
  }, [identities]);

  useEffect(() => {
    saveSelectedIdentity(selectedIdentityId);
  }, [selectedIdentityId]);

  const selectedIdentity = identities.find(
    (identity) => identity.id === selectedIdentityId
  );

  function selectIdentity(id: string) {
    setSelectedIdentityId(id);
  }

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

    setSelectedIdentityId(newIdentity.id);
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
        selectedIdentityId,
        selectedIdentity,
        addIdentity,
        castVote,
        selectIdentity,
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