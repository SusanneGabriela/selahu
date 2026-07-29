import { router } from "expo-router";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../constants/typography";
import { useIdentities } from "../context/IdentityContext";

export default function MyIdentitiesScreen() {
  const {
    identities,
    selectIdentity,
  } = useIdentities();

  function handleSelect(id: string) {
    selectIdentity(id);
    router.push("/journey");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>
          My Identities
        </Text>

        <Text style={styles.subtitle}>
          Choose the person you want to become today.
        </Text>

        <View style={styles.divider} />

        <FlatList
          data={identities}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() => handleSelect(item.id)}
            >
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.vision}>
                {item.vision || "No vision yet."}
              </Text>

              <Text style={styles.votes}>
                {item.votes} vote{item.votes === 1 ? "" : "s"}
              </Text>
            </Pressable>
          )}
          ListEmptyComponent={
            <Text style={styles.empty}>
              You haven't created an identity yet.
            </Text>
          }
        />

        <View style={styles.divider} />

        <Pressable
          onPress={() => router.push("/new-identity")}
        >
          <Text style={styles.button}>
            + Create Identity
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  page: {
    flex: 1,
    paddingHorizontal: 36,
    paddingTop: 132,
  },

  title: {
    ...TYPOGRAPHY.hero,
    color: COLORS.primary,
    marginBottom: 16,
  },

  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    marginBottom: 32,
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
    marginBottom: 24,
  },

  list: {
    paddingBottom: 24,
  },

  card: {
    marginBottom: 28,
  },

  name: {
    ...TYPOGRAPHY.title,
    color: COLORS.primary,
    marginBottom: 8,
  },

  vision: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    marginBottom: 8,
    lineHeight: 28,
  },

  votes: {
    ...TYPOGRAPHY.label,
    color: COLORS.secondaryText,
  },

  empty: {
    ...TYPOGRAPHY.body,
    color: COLORS.secondaryText,
    textAlign: "center",
    marginTop: 40,
  },

  button: {
    ...TYPOGRAPHY.button,
    color: COLORS.primary,
  },
});