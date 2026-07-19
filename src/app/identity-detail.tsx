import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";

export default function IdentityDetailScreen() {
  const [votes, setVotes] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
        Software Engineer
    </Text>

    <Text style={styles.stage}>
        🌱 Seed
    </Text>

    <Text style={styles.label}>
        Today's Votes
    </Text>

    <Text style={styles.counter}>
        {votes}
    </Text>

    <Pressable
        style={styles.button}
        onPress={() => setVotes(votes + 1)}
    >
        <Text style={styles.buttonText}>
            Cast Vote
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
},

label: {
    marginTop: 40,
    fontSize: 18,
},

counter: {
    fontSize: 48,
    fontWeight: "700",
    marginVertical: 16,
},

button: {
    backgroundColor: "#173F2A",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
},

buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
},
});