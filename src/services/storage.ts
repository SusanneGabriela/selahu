import AsyncStorage from "@react-native-async-storage/async-storage";

const IDENTITIES_KEY = "identities";

export async function saveIdentities(identities: any[]) {
  try {
    await AsyncStorage.setItem(
      IDENTITIES_KEY,
      JSON.stringify(identities)
    );
  } catch (error) {
    console.error("Failed to save identities:", error);
  }
}

export async function loadIdentities() {
  try {
    const data = await AsyncStorage.getItem(IDENTITIES_KEY);

    if (data) {
      return JSON.parse(data);
    }

    return [];
  } catch (error) {
    console.error("Failed to load identities:", error);
    return [];
  }
}