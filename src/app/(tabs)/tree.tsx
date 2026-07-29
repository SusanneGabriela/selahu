import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function TreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Tree</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F2",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 26,
  },
});