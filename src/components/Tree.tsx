import { StyleSheet, Text, View } from "react-native";

type TreeProps = {
  votes: number;
};

function getTree(votes: number) {
  if (votes >= 500) {
    return {
      emoji: "🌲",
      stage: "Mature Tree",
    };
  }

  if (votes >= 150) {
    return {
      emoji: "🌳",
      stage: "Young Tree",
    };
  }

  if (votes >= 50) {
    return {
      emoji: "🌿",
      stage: "Growing Plant",
    };
  }

  if (votes >= 10) {
    return {
      emoji: "🌱",
      stage: "Sprout",
    };
  }

  return {
    emoji: "🌰",
    stage: "Seed",
  };
}

export default function Tree({ votes }: TreeProps) {
  const tree = getTree(votes);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{tree.emoji}</Text>

      <Text style={styles.stage}>
        {tree.stage}
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
    marginVertical: 32,
  },

  emoji: {
    fontSize: 90,
  },

  stage: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "700",
    color: "#173F2A",
  },

  votes: {
    marginTop: 6,
    fontSize: 16,
    color: "#666",
  },
});