import { useLocalSearchParams } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import { useIdentities } from "../../context/IdentityContext";

export default function IdentityDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { identities, castVote } = useIdentities();

  const identity = identities.find((item) => item.id === id);

  if (!identity) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>Identity not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{identity.title}</Text>

      <Text style={styles.stage}>{identity.stage}</Text>

      <Text style={styles.label}>Today's Votes</Text>

      <Text style={styles.votes}>{identity.votes}</Text>

      <Pressable
        style={styles.button}
        onPress={() => castVote(identity.id)}
      >
        <Text style={styles.buttonText}>Cast Vote</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 12,
  },

  stage: {
    fontSize: 22,
    marginBottom: 32,
  },

  label: {
    fontSize: 18,
    color: "#666",
  },

  votes: {
    fontSize: 48,
    fontWeight: "700",
    marginVertical: 20,
  },

  button: {
    backgroundColor: "#173F2A",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  error: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
});