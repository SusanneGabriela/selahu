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
        >
          {/* Bottom Tabs */}
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />

          {/* Flow Screens */}
          <Stack.Screen
            name="journey"
            options={{ presentation: "card" }}
          />

          <Stack.Screen
            name="reflection"
            options={{ presentation: "card" }}
          />

          <Stack.Screen
            name="completion"
            options={{ presentation: "card" }}
          />

          <Stack.Screen
            name="my-identities"
            options={{ presentation: "card" }}
          />

          <Stack.Screen
            name="new-identity"
            options={{ presentation: "card" }}
          />

          <Stack.Screen
            name="detail/[id]"
            options={{ presentation: "card" }}
          />
        </Stack>
      </DailyJourneyProvider>
    </IdentityProvider>
  );
}