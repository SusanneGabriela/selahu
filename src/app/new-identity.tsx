import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewIdentity() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [vision, setVision] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.step}>Step {step} of 3</Text>

        {step === 1 && (
          <>
            <Text style={styles.title}>
              Who do you want to become?
            </Text>

            <Text style={styles.subtitle}>
              Name the person you're becoming.
            </Text>

            <TextInput
              placeholder="e.g. Songwriter"
              placeholderTextColor="#9CA3AF"
              value={name}
              onChangeText={setName}
              style={styles.input}
              autoFocus
            />

            <Pressable
              style={[
                styles.button,
                name.trim() === "" && styles.buttonDisabled,
              ]}
              disabled={name.trim() === ""}
              onPress={() => setStep(2)}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.title}>
              Who is this person?
            </Text>

            <Text style={styles.subtitle}>
              Describe them in the present tense.
            </Text>

            <TextInput
              placeholder="I am someone who..."
              placeholderTextColor="#9CA3AF"
              value={vision}
              onChangeText={setVision}
              style={[styles.input, styles.textArea]}
              multiline
              textAlignVertical="top"
              autoFocus
            />

            <View style={styles.buttonRow}>
              <Pressable
                style={styles.secondaryButton}
                onPress={() => setStep(1)}
              >
                <Text style={styles.secondaryButtonText}>Back</Text>
              </Pressable>

              <Pressable
                style={[
                  styles.button,
                  styles.flex,
                  vision.trim() === "" && styles.buttonDisabled,
                ]}
                disabled={vision.trim() === ""}
                onPress={() => setStep(3)}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </>
        )}

        {step === 3 && (
          <>
            <Text style={styles.title}>
              Coming Next 🌱
            </Text>

            <Text style={styles.subtitle}>
              Soon you'll define the daily actions that make this identity
              real.
            </Text>

            <Pressable
              style={styles.secondaryButton}
              onPress={() => setStep(2)}
            >
              <Text style={styles.secondaryButtonText}>Back</Text>
            </Pressable>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F3",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
  },

  step: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 12,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 36,
    lineHeight: 26,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    padding: 18,
    fontSize: 20,
    backgroundColor: "white",
    marginBottom: 40,
  },

  textArea: {
    height: 180,
  },

  button: {
    backgroundColor: "#2E6B42",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonDisabled: {
    opacity: 0.4,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: "#2E6B42",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButtonText: {
    color: "#2E6B42",
    fontWeight: "600",
    fontSize: 16,
  },

  flex: {
    flex: 1,
  },
});