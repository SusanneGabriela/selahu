import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import HomeHeader from "../../components/HomeHeader";
import TreeHero from "../../components/TreeHero";

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
        <HomeHeader />

        <TreeHero votes={lifetimeVotes} />

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

  button: {
    backgroundColor: Colors.primary,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },

  buttonText: {
    ...Typography.button,
    color: "#FFFFFF",
  },
});