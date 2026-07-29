import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../constants/typography";

export default function TreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>
          Today is complete.
        </Text>

        <View style={styles.treeContainer}>
          <Text style={styles.tree}>
            🌱
          </Text>
        </View>

        <Text style={styles.message}>
          Every small decision shapes the person you are becoming.
        </Text>

        <View style={styles.divider} />

        <Pressable>
          <Text style={styles.button}>
            See you tomorrow →
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

    alignItems: "center",
  },

  title: {
    ...TYPOGRAPHY.hero,

    color: COLORS.primary,

    marginBottom: 80,

    textAlign: "center",
  },

  treeContainer: {
    flex: 1,

    justifyContent: "center",
  },

  tree: {
    fontSize: 96,
  },

  message: {
    ...TYPOGRAPHY.body,

    color: COLORS.text,

    textAlign: "center",

    maxWidth: 320,

    marginBottom: 64,
  },

  divider: {
    alignSelf: "stretch",

    height: StyleSheet.hairlineWidth,

    backgroundColor: COLORS.border,

    marginBottom: 28,
  },

  button: {
    ...TYPOGRAPHY.button,

    color: COLORS.primary,
  },
});