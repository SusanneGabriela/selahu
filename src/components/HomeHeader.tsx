import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Good Morning,
      </Text>

      <Text style={styles.name}>
        Susanne
      </Text>

      <Text style={styles.subtitle}>
        Who do you want to become today?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: Spacing.xxl,
  },

  greeting: {
    ...Typography.body,
    color: Colors.secondary,
    marginBottom: 4,
  },

  name: {
    ...Typography.hero,
    color: Colors.primary,
    marginBottom: Spacing.sm,
  },

  subtitle: {
    ...Typography.body,
    color: Colors.secondary,
    textAlign: "center",
    lineHeight: 28,
  },
});