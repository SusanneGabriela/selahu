import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { useIdentities } from "../context/IdentityContext";

export default function NewIdentityScreen() {
  const [title, setTitle] = useState("");
  const { addIdentity } = useIdentities();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🌱 New Identity</Text>

      <TextInput
        style={styles.input}
        placeholder="Who do you want to become?"
        value={title}
        onChangeText={setTitle}
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          if (!title.trim()) return;

          addIdentity(title.trim());
          router.back();
        }}
      >
        <Text style={styles.buttonText}>Create</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
  },

  button: {
    marginTop: 24,
    backgroundColor: "#173F2A",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});