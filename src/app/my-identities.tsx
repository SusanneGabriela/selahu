import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import IdentityCard from "../components/IdentityCard";
import { useIdentities } from "../context/IdentityContext";

export default function MyIdentitiesScreen() {
  const { identities } = useIdentities();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🌱 My Identities</Text>

      {identities.map((identity) => (
        <IdentityCard
          key={identity.id}
          title={identity.title}
          stage={identity.stage}
          votes={identity.votes}
        />
      ))}

      <Pressable
        style={styles.addButton}
        onPress={() => router.push("/new-identity")}
      >
        <Text style={styles.addButtonText}>+ Add Identity</Text>
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
    marginBottom: 24,
  },

  addButton: {
    marginTop: 32,
    backgroundColor: "#173F2A",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});