import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function MyIdentitiesScreen() {
    const { identity } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🌱 My Identities</Text>
      <Text style={styles.identity}>{identity}</Text>
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
  identity: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 32,
  },
});