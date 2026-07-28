import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants/colors";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

export default function JourneyScreen() {
  const identity = {
    name: "Loving Partner",
    vision:
      "I make the people I love feel safe, seen and cherished.",
    actions: [
      "Listen fully",
      "Express gratitude",
      "Do one thoughtful act",
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>{identity.name}</Text>

        <View style={styles.visionContainer}>
          <Text style={styles.vision}>{identity.vision}</Text>
        </View>

        <Text style={styles.label}>Core Actions</Text>

        <View style={styles.actions}>
          {identity.actions.map((action) => (
            <Text key={action} style={styles.action}>
              • {action}
            </Text>
          ))}
        </View>

        <View style={styles.divider} />

        <Pressable>
          <Text style={styles.continue}>
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

    paddingTop: 120,
  },

  title: {
    ...TYPOGRAPHY.hero,

    color: COLORS.primary,

    marginBottom: SPACING.xl,
  },

  visionContainer: {
    maxWidth: "88%",
  },

  vision: {
    ...TYPOGRAPHY.body,

    color: COLORS.text,

    marginBottom: 80,
  },

  label: {
    ...TYPOGRAPHY.label,

    color: COLORS.secondaryText,

    marginBottom: SPACING.lg,
  },

  actions: {
    gap: 24,

    marginBottom: 80,
  },

  action: {
    ...TYPOGRAPHY.action,

    color: COLORS.text,
  },

  divider: {
    height: StyleSheet.hairlineWidth,

    backgroundColor: COLORS.border,

    marginBottom: SPACING.lg,
  },

  continue: {
    ...TYPOGRAPHY.button,

    color: COLORS.primary,
  },
});