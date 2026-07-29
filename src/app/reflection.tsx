import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../constants/typography";

export default function ReflectionScreen() {
  const [reflection, setReflection] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>
          Today's Reflection
        </Text>

        <Text style={styles.prompt}>
          What happened today?
        </Text>

        <View style={styles.divider} />

        <TextInput
          style={styles.input}
          multiline
          value={reflection}
          onChangeText={setReflection}
          placeholder=""
          textAlignVertical="top"
        />

        <View style={styles.bottomDivider} />

        <Pressable>
          <Text style={styles.button}>
            Finish Today →
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
    marginBottom: 48,
  },

  prompt: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    marginBottom: 20,
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
    marginBottom: 24,
  },

  input: {
    flex: 1,

    ...TYPOGRAPHY.body,

    color: COLORS.text,
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