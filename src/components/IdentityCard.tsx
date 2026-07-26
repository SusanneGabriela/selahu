import { Pressable, StyleSheet, Text, View } from "react-native";

type Identity = {
  id: string;
  name?: string;
  vision?: string;
  actions?: string[];
  votes: number;
  createdAt?: string;
  lastVotedDate?: string;
};

type IdentityCardProps = {
  identity: Identity;
  onPress: () => void;
};

export default function IdentityCard({
  identity,
  onPress,
}: IdentityCardProps) {
  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
    >
      <Text style={styles.title}>
        {identity.name ?? "Untitled Identity"}
      </Text>

      <Text
        style={styles.vision}
        numberOfLines={2}
      >
        {identity.vision ?? ""}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.actions}>
          {(identity.actions ?? []).length} actions
        </Text>

        <Text style={styles.votes}>
          🌱 {identity.votes}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#173F2A",
    marginBottom: 10,
  },

  vision: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    minHeight: 24,
  },

  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actions: {
    fontSize: 15,
    color: "#888",
  },

  votes: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2E6B42",
  },
});