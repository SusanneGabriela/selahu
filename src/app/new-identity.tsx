import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useIdentities } from "../context/IdentityContext";

export default function NewIdentity() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [vision, setVision] = useState("");

  const [action, setAction] = useState("");
  const [actions, setActions] = useState<string[]>([]);

  const { addIdentity } = useIdentities();

  function addAction() {
    if (action.trim() === "") return;

    setActions((previous) => [...previous, action.trim()]);
    setAction("");
  }

  function plantSeed() {
    addIdentity(name, vision, actions);

    router.replace("/my-identities");
  }

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
              style={styles.input}
              placeholder="e.g. Songwriter"
              placeholderTextColor="#9CA3AF"
              value={name}
              onChangeText={setName}
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
              style={[styles.input, styles.textArea]}
              placeholder="I am someone who..."
              placeholderTextColor="#9CA3AF"
              multiline
              textAlignVertical="top"
              value={vision}
              onChangeText={setVision}
              autoFocus
            />

            <View style={styles.row}>
              <Pressable
                style={styles.secondaryButton}
                onPress={() => setStep(1)}
              >
                <Text style={styles.secondaryText}>
                  Back
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.button,
                  styles.flex,
                  vision.trim() === "" &&
                    styles.buttonDisabled,
                ]}
                disabled={vision.trim() === ""}
                onPress={() => setStep(3)}
              >
                <Text style={styles.buttonText}>
                  Continue
                </Text>
              </Pressable>
            </View>
          </>
        )}

        {step === 3 && (
          <>
            <Text style={styles.title}>
              What does this person do consistently?
            </Text>

            <Text style={styles.subtitle}>
              Add 2–5 actions that define this identity.
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Write one song"
              placeholderTextColor="#9CA3AF"
              value={action}
              onChangeText={setAction}
            />

            <Pressable
              style={styles.secondaryButton}
              onPress={addAction}
            >
              <Text style={styles.secondaryText}>
                + Add Action
              </Text>
            </Pressable>

            <FlatList
              style={{ marginTop: 24 }}
              data={actions}
              keyExtractor={(item, index) =>
                `${item}-${index}`
              }
              renderItem={({ item }) => (
                <View style={styles.actionCard}>
                  <Text style={styles.actionText}>
                    ✓ {item}
                  </Text>
                </View>
              )}
            />

            <View style={styles.row}>
              <Pressable
                style={styles.secondaryButton}
                onPress={() => setStep(2)}
              >
                <Text style={styles.secondaryText}>
                  Back
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.button,
                  styles.flex,
                  actions.length === 0 &&
                    styles.buttonDisabled,
                ]}
                disabled={actions.length === 0}
                onPress={plantSeed}
              >
                <Text style={styles.buttonText}>
                  🌱 Plant Seed
                </Text>
              </Pressable>
            </View>
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
    paddingHorizontal: 28,
    justifyContent: "center",
  },

  step: {
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
    marginBottom: 30,
    lineHeight: 26,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    padding: 18,
    fontSize: 18,
    backgroundColor: "white",
    marginBottom: 16,
  },

  textArea: {
    height: 180,
  },

  button: {
    backgroundColor: "#2E6B42",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
  },

  buttonDisabled: {
    opacity: 0.4,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 18,
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: "#2E6B42",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryText: {
    color: "#2E6B42",
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },

  flex: {
    flex: 1,
  },

  actionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  actionText: {
    fontSize: 17,
    color: "#1F2937",
  },
});