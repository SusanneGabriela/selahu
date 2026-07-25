import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import IdentityCard from "../components/IdentityCard";
import {
  loadIdentities,
  saveIdentities,
} from "../services/storage";

type Identity = {
  id: string;
  title: string;
  stage: string;
  votes: number;
};

export default function MyIdentitiesScreen() {
  const [identities, setIdentities] = useState<Identity[]>([]);

  useEffect(() => {
    async function fetchIdentities() {
      const saved = await loadIdentities();

      if (saved.length > 0) {
        setIdentities(saved);
      }
    }

    fetchIdentities();
  }, []);

  useEffect(() => {
    saveIdentities(identities);
  }, [identities]);

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
        onPress={() => router.push("/")}
      >
        <Text style={styles.addButtonText}>
          + Add Identity
        </Text>
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
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});