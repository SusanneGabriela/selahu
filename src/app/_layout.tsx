import { Stack } from "expo-router";

import {
  CormorantGaramond_400Regular,
  CormorantGaramond_500Medium,
  CormorantGaramond_600SemiBold,
  CormorantGaramond_700Bold,
  useFonts,
} from "@expo-google-fonts/cormorant-garamond";

import { ActivityIndicator, View } from "react-native";

import { DailyJourneyProvider } from "../context/DailyJourneyContext";
import { IdentityProvider } from "../context/IdentityContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    CormorantRegular:
      CormorantGaramond_400Regular,
    CormorantMedium:
      CormorantGaramond_500Medium,
    CormorantSemiBold:
      CormorantGaramond_600SemiBold,
    CormorantBold:
      CormorantGaramond_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F8F6F1",
        }}
      >
        <ActivityIndicator
          size="large"
          color="#1E4D37"
        />
      </View>
    );
  }

  return (
    <IdentityProvider>
      <DailyJourneyProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="journey"
            options={{
              presentation: "card",
            }}
          />

          <Stack.Screen
            name="reflection"
            options={{
              presentation: "card",
            }}
          />

          <Stack.Screen
            name="completion"
            options={{
              presentation: "card",
            }}
          />

          <Stack.Screen
            name="my-identities"
            options={{
              presentation: "card",
            }}
          />

          <Stack.Screen
            name="new-identity"
            options={{
              presentation: "card",
            }}
          />

          <Stack.Screen
            name="detail/[id]"
            options={{
              presentation: "card",
            }}
          />
        </Stack>
      </DailyJourneyProvider>
    </IdentityProvider>
  );
}