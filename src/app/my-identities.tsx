import { router } from "expo-router";
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import IdentityCard from "../components/IdentityCard";
import { useIdentities } from "../context/IdentityContext";

export default function MyIdentitiesScreen() {
  const { identities } = useIdentities();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Identities</Text>

      <Button
        title="Go to Test"
        onPress={() => router.push("/test")}
      />

      <View style={{ height: 16 }} />

      <FlatList
        data={identities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <IdentityCard
            identity={item}
            onPress={() => router.push(`/detail/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            You haven't created any identities yet.
          </Text>
        }
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />

      <Pressable
        style={styles.addButton}
        onPress={() => router.push("/new-identity")}
      >
        <Text style={styles.addButtonText}>+ Add Identity</Text>
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
    marginBottom: 24,
  },
  emptyText: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 40,
  },
  addButton: {
    backgroundColor: "#173F2A",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 16,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});