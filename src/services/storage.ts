import AsyncStorage from "@react-native-async-storage/async-storage";

const IDENTITIES_KEY = "identities";
const SELECTED_IDENTITY_KEY = "selected_identity";

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

export async function saveSelectedIdentity(
  identityId: string | null
) {
  try {
    if (identityId === null) {
      await AsyncStorage.removeItem(
        SELECTED_IDENTITY_KEY
      );
      return;
    }

    await AsyncStorage.setItem(
      SELECTED_IDENTITY_KEY,
      identityId
    );
  } catch (error) {
    console.error(
      "Failed to save selected identity:",
      error
    );
  }
}

export async function loadSelectedIdentity() {
  try {
    return await AsyncStorage.getItem(
      SELECTED_IDENTITY_KEY
    );
  } catch (error) {
    console.error(
      "Failed to load selected identity:",
      error
    );
    return null;
  }
}