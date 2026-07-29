import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#173F2A",
        tabBarInactiveTintColor: "#999",

        tabBarStyle: {
          backgroundColor: "#FAF7F2",
          borderTopWidth: 0,
          height: 82,
          paddingTop: 8,
          paddingBottom: 16,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today",
        }}
      />

      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
        }}
      />

      <Tabs.Screen
        name="tree"
        options={{
          title: "Tree",
        }}
      />
    </Tabs>
  );
}