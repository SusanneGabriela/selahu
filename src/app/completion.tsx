import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../constants/typography";
import { useDailyJourney } from "../context/DailyJourneyContext";
import { useIdentities } from "../context/IdentityContext";

export default function CompletionScreen() {
  const { journey, completeJourney, resetJourney } = useDailyJourney();
  const { identities, castVote } = useIdentities();

  const identity = identities.find(
    (i) => i.id === journey.selectedIdentityId
  );

  function handleDone() {
    if (identity) {
      castVote(identity.id);
    }

    completeJourney();
    resetJourney();

    router.replace("/");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>
          Today is Complete
        </Text>

        <Text style={styles.emoji}>
          🌱
        </Text>

        <Text style={styles.message}>
          {identity
            ? `${identity.name} has grown a little stronger today.`
            : "You showed up today."}
        </Text>

        <Text style={styles.quote}>
          Every small decision shapes the person you are becoming.
        </Text>

        <View style={{ flex: 1 }} />

        <View style={styles.divider} />

        <Pressable onPress={handleDone}>
          <Text style={styles.button}>
            Return Home →
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  page: {
    flex: 1,
    paddingHorizontal: 36,
    paddingTop: 132,
  },

  title: {
    ...TYPOGRAPHY.hero,
    color: COLORS.primary,
    marginBottom: 40,
  },

  emoji: {
    fontSize: 72,
    textAlign: "center",
    marginBottom: 32,
  },

  message: {
    ...TYPOGRAPHY.title,
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 34,
  },

  quote: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    textAlign: "center",
    lineHeight: 30,
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
    marginBottom: 24,
  },

  button: {
    ...TYPOGRAPHY.button,
    color: COLORS.primary,
    textAlign: "center",
  },
});