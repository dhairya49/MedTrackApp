import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#777",
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* MACHINES */}
      <Tabs.Screen
        name="MachinesScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="storefront"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* PRESCRIPTIONS */}
      <Tabs.Screen
        name="PrescriptionScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document" size={size} color={color} />
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
