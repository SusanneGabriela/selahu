import { useLocalSearchParams } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useIdentities } from "../../context/IdentityContext";

export default function IdentityDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { identities, castVote } = useIdentities();

  const identity = identities.find((item) => item.id === id);

  if (!identity) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>
          Identity not found.
        </Text>
      </SafeAreaView>
    );
  }

  const votedToday =
    identity.lastVotedDate === new Date().toDateString();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          {identity.name}
        </Text>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Vision
          </Text>

          <Text style={styles.vision}>
            {identity.vision}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Daily Actions
          </Text>

          {identity.actions.map((action, index) => (
            <View
              key={index}
              style={styles.actionCard}
            >
              <Text style={styles.actionText}>
                ✓ {action}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Votes
          </Text>

          <Text style={styles.voteCount}>
            🌱 {identity.votes}
          </Text>
        </View>

        <Pressable
          style={[
            styles.button,
            votedToday &&
              styles.buttonDisabled,
          ]}
          disabled={votedToday}
          onPress={() =>
            castVote(identity.id)
          }
        >
          <Text style={styles.buttonText}>
            {votedToday
              ? "✓ You lived this identity today"
              : "🌱 I lived this identity today"}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F3",
  },

  content: {
    padding: 24,
    paddingBottom: 60,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#173F2A",
    marginBottom: 32,
  },

  section: {
    marginBottom: 32,
  },

  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 14,
    color: "#173F2A",
  },

  vision: {
    fontSize: 18,
    lineHeight: 30,
    color: "#444",
  },

  actionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },

  actionText: {
    fontSize: 17,
    color: "#222",
  },

  voteCount: {
    fontSize: 42,
    fontWeight: "700",
    color: "#2E6B42",
  },

  button: {
    backgroundColor: "#173F2A",
    padding: 20,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 12,
  },

  buttonDisabled: {
    opacity: 0.45,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  error: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 60,
  },
});