import { StyleSheet, Text, View } from "react-native";

type Props = {
  votes: number;
};

export default function Tree({ votes }: Props) {
  let stage = "Seed";
  let emoji = "🌰";

  if (votes >= 30) {
    stage = "Sprout";
    emoji = "🌱";
  }

  if (votes >= 100) {
    stage = "Young Tree";
    emoji = "🌿";
  }

  if (votes >= 365) {
    stage = "Tree";
    emoji = "🌳";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>

      <Text style={styles.stage}>
        {stage}
      </Text>

      <Text style={styles.votes}>
        {votes} Lifetime Votes
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  emoji: {
    fontSize: 96,
    marginBottom: 20,
  },

  stage: {
    fontSize: 32,
    fontWeight: "700",
    color: "#173F2A",
    marginBottom: 8,
  },

  votes: {
    fontSize: 18,
    color: "#7A7A7A",
  },
});