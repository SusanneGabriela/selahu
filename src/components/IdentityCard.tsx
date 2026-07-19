import { StyleSheet, Text, View } from "react-native";

type IdentityCardProps = {
  title: string;
  votes: number;
};

export default function IdentityCard({
  title,
  votes,
}: IdentityCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.votes}>
        {votes} votes today
      </Text>
    </View>
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

  votes: {
    marginTop: 8,
    color: "#666",
  },
});