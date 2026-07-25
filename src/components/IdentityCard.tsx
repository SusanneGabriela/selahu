import { Pressable, StyleSheet, Text } from "react-native";

type Identity = {
  id: string;
  title: string;
  stage: string;
  votes: number;
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
        {identity.title}
      </Text>

      <Text style={styles.stage}>
        {identity.stage}
      </Text>

      <Text style={styles.votes}>
        {identity.votes} votes today
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
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