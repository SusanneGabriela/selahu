import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Tree from "../../components/Tree";
import { useIdentities } from "../../context/IdentityContext";

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

        <Text style={styles.title}>Selahu</Text>

        <Text style={styles.subtitle}>
          Who do you want to become today?
        </Text>

        <View style={styles.treeContainer}>
          <Tree votes={lifetimeVotes} />
        </View>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/journey")}
        >
          <Text style={styles.buttonText}>Begin</Text>
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
    color: "#173F2A",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#555",
    marginBottom: 36,
  },

  treeContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#173F2A",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});