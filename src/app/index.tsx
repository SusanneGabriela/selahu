import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [identity, setIdentity] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>🌱</Text>

        <Text style={styles.title}>
          Selahu
        </Text>

        <Text style={styles.subtitle}>
          Who do you want to become today?
        </Text>

        <TextInput
          placeholder="Software Engineer"
          placeholderTextColor="#999"
          style={styles.input}
          value={identity}
          onChangeText={setIdentity}
        />

        <Pressable
          style={styles.button}
          onPress={() => router.push("/my-identities")}
        >
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FAF7F2",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  logo: {
    fontSize: 48,
    textAlign: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#444",
    marginBottom: 48,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 16,
    backgroundColor: "white",
    padding: 18,
    fontSize: 18,
    marginBottom: 32,
  },

  button: {
    backgroundColor: "#173F2A",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

});