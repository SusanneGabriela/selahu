import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useIdentities } from "../context/IdentityContext";

export default function NewIdentityScreen() {
  const { addIdentity } = useIdentities();

  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [vision, setVision] = useState("");
  const [action, setAction] = useState("");
  const [actions, setActions] = useState<string[]>([]);

  function addAction() {
    const trimmed = action.trim();

    if (!trimmed) return;

    setActions((previous) => [...previous, trimmed]);
    setAction("");
  }

  function removeAction(index: number) {
    setActions((previous) =>
      previous.filter((_, i) => i !== index)
    );
  }

  function plantSeed() {
    addIdentity(name, vision, actions);
    router.replace("/my-identities");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {step === 1 && (
          <>
            <Text style={styles.title}>
              Who do you want to become?
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Example: A Loving Wife"
              value={name}
              onChangeText={setName}
            />

            <Pressable
              style={[
                styles.button,
                !name.trim() && styles.buttonDisabled,
              ]}
              disabled={!name.trim()}
              onPress={() => setStep(2)}
            >
              <Text style={styles.buttonText}>
                Continue
              </Text>
            </Pressable>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.title}>
              Who is this person?
            </Text>

            <Text style={styles.subtitle}>
              Describe the person you want to become.
            </Text>

            <TextInput
              style={styles.textArea}
              multiline
              placeholder="Write your vision..."
              value={vision}
              onChangeText={setVision}
            />

            <View style={styles.row}>
              <Pressable
                style={styles.secondaryButton}
                onPress={() => setStep(1)}
              >
                <Text style={styles.secondaryButtonText}>
                  Back
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.button,
                  !vision.trim() &&
                    styles.buttonDisabled,
                ]}
                disabled={!vision.trim()}
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
              Add daily actions that shape this
              identity.
            </Text>

            <View style={styles.actionRow}>
              <TextInput
                style={styles.actionInput}
                placeholder="Example: Read 10 pages"
                value={action}
                onChangeText={setAction}
              />

              <Pressable
                style={styles.addButton}
                onPress={addAction}
              >
                <Text style={styles.addButtonText}>
                  +
                </Text>
              </Pressable>
            </View>

            {actions.map((item, index) => (
              <View
                key={index}
                style={styles.actionCard}
              >
                <Text style={styles.actionText}>
                  • {item}
                </Text>

                <Pressable
                  onPress={() =>
                    removeAction(index)
                  }
                >
                  <Text style={styles.removeText}>
                    Remove
                  </Text>
                </Pressable>
              </View>
            ))}

            <View style={styles.row}>
              <Pressable
                style={styles.secondaryButton}
                onPress={() => setStep(2)}
              >
                <Text style={styles.secondaryButtonText}>
                  Back
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.button,
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F3",
  },

  content: {
    padding: 24,
    paddingBottom: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#173F2A",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    lineHeight: 24,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    fontSize: 18,
    marginBottom: 24,
  },

  textArea: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    fontSize: 17,
    minHeight: 180,
    textAlignVertical: "top",
    marginBottom: 24,
  },

  actionRow: {
    flexDirection: "row",
    marginBottom: 20,
  },

  actionInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    fontSize: 17,
    marginRight: 12,
  },

  addButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#173F2A",
    justifyContent: "center",
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "600",
  },

  actionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actionText: {
    flex: 1,
    fontSize: 16,
    color: "#222",
  },

  removeText: {
    color: "#C0392B",
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },

  button: {
    flex: 1,
    backgroundColor: "#173F2A",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginLeft: 10,
  },

  secondaryButton: {
    flex: 1,
    backgroundColor: "#E8ECE8",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginRight: 10,
  },

  secondaryButtonText: {
    color: "#173F2A",
    fontWeight: "600",
    fontSize: 16,
  },

  buttonDisabled: {
    opacity: 0.4,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
});