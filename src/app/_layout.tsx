import { Stack } from "expo-router";

import { DailyJourneyProvider } from "../context/DailyJourneyContext";
import { IdentityProvider } from "../context/IdentityContext";

export default function RootLayout() {
  return (
    <IdentityProvider>
      <DailyJourneyProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </DailyJourneyProvider>
    </IdentityProvider>
  );
}