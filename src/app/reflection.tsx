import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../constants/typography";
import { useDailyJourney } from "../context/DailyJourneyContext";
import { useIdentities } from "../context/IdentityContext";

export default function ReflectionScreen() {
  const { journey, setReflection } = useDailyJourney();
  const { identities } = useIdentities();

  const identity = identities.find(
    (i) => i.id === journey.selectedIdentityId
  );

  function handleFinish() {
    router.replace("/completion");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>
          Today's Reflection
        </Text>

        <Text style={styles.subtitle}>
          {identity?.name ?? ""}
        </Text>

        <Text style={styles.prompt}>
          What happened today?
        </Text>

        <TextInput
          style={styles.input}
          multiline
          placeholder="Write honestly. No one else will read this."
          placeholderTextColor="#999"
          value={journey.reflection}
          onChangeText={setReflection}
          textAlignVertical="top"
        />

        <View style={{ flex: 1 }} />

        <View style={styles.divider} />

        <Pressable onPress={handleFinish}>
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
    marginBottom: 12,
  },

  subtitle: {
    ...TYPOGRAPHY.title,
    color: COLORS.secondaryText,
    marginBottom: 32,
  },

  prompt: {
    ...TYPOGRAPHY.title,
    color: COLORS.primary,
    marginBottom: 20,
  },

  input: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    minHeight: 260,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 20,
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
  },
});