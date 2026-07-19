import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function IdentityDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Identity Detail</Text>
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
});