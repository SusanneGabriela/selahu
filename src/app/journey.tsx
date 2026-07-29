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

export default function JourneyScreen() {
  const { identities } = useIdentities();
  const { startJourney } = useDailyJourney();

  // Temporary: use the newest identity.
  // Later this will come from the selected identity.
  const identity = identities[identities.length - 1];

  function handleContinue() {
    if (!identity) return;

    startJourney(identity.id);
    router.push("/reflection");
  }

  if (!identity) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.page}>
          <Text style={styles.title}>Today's Journey</Text>

          <Text style={styles.vision}>
            You haven't created an identity yet.
          </Text>

          <View style={styles.bottomDivider} />

          <Pressable onPress={() => router.back()}>
            <Text style={styles.button}>Go Back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>Today's Journey</Text>

        <Text style={styles.vision}>
          {identity.vision || "No vision yet."}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Core Actions</Text>

        {(identity.actions ?? []).length > 0 ? (
          identity.actions.map((action, index) => (
            <Text
              key={`${action}-${index}`}
              style={styles.habit}
            >
              • {action}
            </Text>
          ))
        ) : (
          <Text style={styles.habit}>
            No actions yet.
          </Text>
        )}

        <View style={{ flex: 1 }} />

        <View style={styles.bottomDivider} />

        <Pressable onPress={handleContinue}>
          <Text style={styles.button}>
            Continue →
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

  vision: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    marginBottom: 40,
    lineHeight: 30,
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
    marginBottom: 32,
  },

  sectionTitle: {
    ...TYPOGRAPHY.title,
    color: COLORS.primary,
    marginBottom: 20,
  },

  habit: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    marginBottom: 12,
  },

  bottomDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
    marginBottom: 24,
  },

  button: {
    ...TYPOGRAPHY.button,
    color: COLORS.primary,
  },
});