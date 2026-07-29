import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Button from "../../components/Button/Button";
import Screen from "../../components/Screen/Screen";
import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>
            Good morning,
          </Text>

          <Text style={styles.title}>
            Who are you{"\n"}becoming today?
          </Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>🌄</Text>
        </View>

        <View style={styles.identitySection}>
          <Text style={styles.identity}>
            Musician
          </Text>

          <Text style={styles.vision}>
            Compose one honest song.
          </Text>
        </View>

        <Button
          title="Begin Today"
          onPress={() => router.push("/journey")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  greeting: {
    fontSize: Typography.body,
    color: Colors.textSecondary,
    marginTop: Spacing.md,
  },

  title: {
    fontSize: Typography.title,
    color: Colors.text,
    fontWeight: "700",
    lineHeight: 44,
    marginTop: Spacing.sm,
  },

  hero: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 280,
  },

  heroEmoji: {
    fontSize: 100,
  },

  identitySection: {
    alignItems: "center",
    marginBottom: Spacing.xl,
  },

  identity: {
    fontSize: 34,
    fontWeight: "700",
    color: Colors.primary,
    marginBottom: Spacing.sm,
  },

  vision: {
    fontSize: Typography.body,
    color: Colors.textSecondary,
    textAlign: "center",
  },
});