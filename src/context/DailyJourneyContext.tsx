import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export type DailyJourney = {
  started: boolean;
  completed: boolean;
  selectedIdentityId: string | null;
  reflection: string;
};

type DailyJourneyContextType = {
  journey: DailyJourney;

  selectIdentity: (id: string) => void;

  startJourney: () => void;

  setReflection: (text: string) => void;

  completeJourney: () => void;

  resetJourney: () => void;
};

const DailyJourneyContext = createContext<
  DailyJourneyContextType | undefined
>(undefined);

export function DailyJourneyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [journey, setJourney] = useState<DailyJourney>({
    started: false,
    completed: false,
    selectedIdentityId: null,
    reflection: "",
  });

  function selectIdentity(id: string) {
    setJourney((previous) => ({
      ...previous,
      selectedIdentityId: id,
    }));
  }

  function startJourney() {
    setJourney((previous) => ({
      ...previous,
      started: true,
    }));
  }

  function setReflection(text: string) {
    setJourney((previous) => ({
      ...previous,
      reflection: text,
    }));
  }

  function completeJourney() {
    setJourney((previous) => ({
      ...previous,
      completed: true,
    }));
  }

  function resetJourney() {
    setJourney({
      started: false,
      completed: false,
      selectedIdentityId: null,
      reflection: "",
    });
  }

  return (
    <DailyJourneyContext.Provider
      value={{
        journey,
        selectIdentity,
        startJourney,
        setReflection,
        completeJourney,
        resetJourney,
      }}
    >
      {children}
    </DailyJourneyContext.Provider>
  );
}

export function useDailyJourney() {
  const context = useContext(DailyJourneyContext);

  if (!context) {
    throw new Error(
      "useDailyJourney must be used inside DailyJourneyProvider"
    );
  }

  return context;
}