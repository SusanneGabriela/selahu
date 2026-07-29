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

    if (!data) {
      return [];
    }

    const parsed = JSON.parse(data);

    return parsed.map((identity: any) => ({
      id: identity.id ?? Date.now().toString(),

      name: identity.name ?? identity.title ?? "Untitled",

      vision: identity.vision ?? "",

      actions: Array.isArray(identity.actions)
        ? identity.actions
        : [],

      votes: identity.votes ?? 0,

      createdAt:
        identity.createdAt ?? new Date().toISOString(),

      lastVotedDate: identity.lastVotedDate,
    }));
  } catch (error) {
    console.error("Failed to load identities:", error);
    return [];
  }
}