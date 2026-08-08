import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useIdentities } from "../context/IdentityContext";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

export default function MyIdentitiesScreen() {
  const { identities } = useIdentities();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          My Identities
        </Text>

        <Text style={styles.subtitle}>
          The people you are becoming.
        </Text>

        {identities.map((identity) => (
          <Pressable
            key={identity.id}
            style={styles.card}
            onPress={() =>
              router.push(`/detail/${identity.id}`)
            }
          >
            <View style={styles.row}>
              <Text style={styles.icon}>🌱</Text>

              <View style={styles.textContainer}>
                <Text style={styles.name}>
                  {identity.name}
                </Text>

                <Text
                  style={styles.vision}
                  numberOfLines={2}
                >
                  {identity.vision}
                </Text>
              </View>
            </View>

            <View style={styles.footer}>
              <Text style={styles.votes}>
                {identity.votes} Lifetime Votes
              </Text>
            </View>
          </Pressable>
        ))}

        <Pressable
          style={styles.button}
          onPress={() =>
            router.push("/new-identity")
          }
        >
          <Text style={styles.buttonText}>
            + Create Identity
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: Spacing.xl,
    paddingBottom: 80,
  },

  title: {
    ...Typography.hero,
    color: Colors.primary,
    marginBottom: 6,
  },

  subtitle: {
    ...Typography.body,
    color: Colors.secondary,
    marginBottom: 36,
  },

  card: {
    backgroundColor: Colors.surface,
    borderRadius: 22,
    padding: 22,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  icon: {
    fontSize: 30,
    marginRight: 18,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    ...Typography.heading,
    color: Colors.primary,
    marginBottom: 6,
  },

  vision: {
    ...Typography.small,
    color: Colors.secondary,
    lineHeight: 24,
  },

  footer: {
    marginTop: 22,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 14,
  },

  votes: {
    ...Typography.small,
    color: Colors.success,
  },

  button: {
    marginTop: 18,
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