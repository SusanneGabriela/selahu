import { router, useLocalSearchParams } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import IdentityCard from "../components/IdentityCard";

export default function MyIdentitiesScreen() {
  const { identity } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🌱 My Identities</Text>

      <IdentityCard
        title={identity as string}
        stage="🌱 Seed"
        votes={0}
      />

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
  },

  stage: {
    marginTop: 8,
    color: "#2E7D32",
    fontWeight: "500",
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