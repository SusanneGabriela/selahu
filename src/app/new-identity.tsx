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
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.step}>Step 1 of 3</Text>

        <Text style={styles.title}>
          Who do you want to become?
        </Text>

        <Text style={styles.subtitle}>
          Give this identity a name.
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
            name.trim().length === 0 && styles.buttonDisabled,
          ]}
          disabled={name.trim().length === 0}
          onPress={() => {
            // Step 2 comes next
          }}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
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
});