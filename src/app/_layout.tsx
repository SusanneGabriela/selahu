import { Stack } from "expo-router";
import { IdentityProvider } from "../context/IdentityContext";

export default function RootLayout() {
  return (
    <IdentityProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </IdentityProvider>
  );
}