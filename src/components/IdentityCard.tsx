import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type IdentityCardProps = {
  title: string;
  stage: string;
  votes: number;
};

export default function IdentityCard({
  title,
  stage,
  votes,
}: IdentityCardProps) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push("/identity-detail")}
    >
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.stage}>{stage}</Text>

      <Text style={styles.votes}>
        {votes} votes today
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
  },

  stage: {
    marginTop: 8,
    color: "#2E7D32",
    fontWeight: "500",
  },

  votes: {
    marginTop: 8,
    color: "#666666",
  },
});