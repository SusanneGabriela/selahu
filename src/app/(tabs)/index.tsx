import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Tree from "../../components/Tree";
import { useIdentities } from "../../context/IdentityContext";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function HomeScreen() {
  const { identities } = useIdentities();

  const lifetimeVotes = identities.reduce(
    (total, identity) => total + identity.votes,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.greeting}>
          Good Morning,
        </Text>

        <Text style={styles.name}>
          Susanne
        </Text>

        <Text style={styles.subtitle}>
          Who do you want to become today?
        </Text>

        <View style={styles.treeContainer}>
          <Tree votes={lifetimeVotes} />
        </View>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/journey")}
        >
          <Text style={styles.buttonText}>
            Begin Today's Journey
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Spacing.xl,
  },

  greeting: {
    ...Typography.body,
    color: Colors.secondary,
    textAlign: "center",
  },

  name: {
    ...Typography.hero,
    color: Colors.primary,
    textAlign: "center",
    marginBottom: Spacing.sm,
  },

  subtitle: {
    ...Typography.body,
    color: Colors.secondary,
    textAlign: "center",
    marginBottom: 46,
  },

  treeContainer: {
    alignItems: "center",
    marginBottom: 52,
  },

  button: {
    backgroundColor: Colors.primary,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },

  buttonText: {
    ...Typography.button,
    color: "white",
  },

});