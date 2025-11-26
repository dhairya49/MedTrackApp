import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";

const machines = [
  { id: 1, name: "City Center Machine", distance: "300m", status: "Active" },
  { id: 2, name: "Tech Park Machine", distance: "1.2km", status: "Active" },
  { id: 3, name: "Hospital Gate Machine", distance: "500m", status: "Inactive" },
  { id: 4, name: "Metro Station Machine", distance: "900m", status: "Active" },
];

export default function MachinesScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#000" : "#fff",
    text: isDark ? "#fff" : "#000",
    card: isDark ? "#121212" : "#f5f5f5",
    active: "#0fb764",
    inactive: "#d9534f",
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.bg }]}>
      
      <Text style={[styles.title, { color: colors.text }]}>Nearby Machines</Text>
      
      {machines.map((machine) => (
        <View key={machine.id} style={[styles.card, { backgroundColor: colors.card }]}>
          
          {/* Machine Name */}
          <Text style={[styles.machineName, { color: colors.text }]}>
            {machine.name}
          </Text>

          {/* Distance */}
          <Text style={[styles.distance, { color: isDark ? "#ccc" : "#555" }]}>
            {machine.distance} away
          </Text>

          {/* Status Pill */}
          <View
            style={[
              styles.statusPill,
              {
                backgroundColor:
                  machine.status === "Active" ? colors.active : colors.inactive,
              },
            ]}
          >
            <Text style={styles.statusText}>{machine.status}</Text>
          </View>

          {/* View Button */}
          <TouchableOpacity style={[styles.button]}>
            <Text style={styles.buttonText}>View Machine</Text>
          </TouchableOpacity>

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  machineName: {
    fontSize: 18,
    fontWeight: "600",
  },
  distance: {
    marginTop: 4,
    fontSize: 14,
  },
  statusPill: {
    marginTop: 10,
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statusText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#0a84ff",
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});
