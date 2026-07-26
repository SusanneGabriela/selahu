import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Tree from "../components/Tree";
import { useIdentities } from "../context/IdentityContext";

export default function HomeScreen() {
  const { identities } = useIdentities();

  const lifetimeVotes = identities.reduce(
    (total, identity) => total + identity.votes,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>🌱</Text>

        <Text style={styles.title}>
          Selahu
        </Text>

        <Text style={styles.subtitle}>
          Who do you want to become today?
        </Text>

        <Tree votes={lifetimeVotes} />

        <Pressable
          style={styles.button}
          onPress={() => router.push("/my-identities")}
        >
          <Text style={styles.buttonText}>
            Begin Today's Journey
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F2",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  logo: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 12,
    color: "#173F2A",
  },

  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#555",
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#173F2A",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 32,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});