import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

export type DailyJourney = {
  started: boolean;
  completed: boolean;
  identityId: string | null;
  reflection: string;
};

type DailyJourneyContextType = {
  journey: DailyJourney;

  startJourney: (identityId: string) => void;

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
    identityId: null,
    reflection: "",
  });

  function startJourney(identityId: string) {
    setJourney({
      started: true,
      completed: false,
      identityId,
      reflection: "",
    });
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
      identityId: null,
      reflection: "",
    });
  }

  return (
    <DailyJourneyContext.Provider
      value={{
        journey,
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