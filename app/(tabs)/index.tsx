import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#000" : "#fff",
    text: isDark ? "#fff" : "#000",
    card: isDark ? "#121212" : "#f3f3f3",
    input: isDark ? "#1e1e1e" : "#e9e9e9",
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.bg }]}>

      {/* Header */}
      <Text style={[styles.title, { color: colors.text }]}>
        👋 Welcome Back
      </Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>
        Your health, simplified.
      </Text>

      {/* Search Bar */}
      <TextInput
        placeholder="Search medicines..."
        placeholderTextColor={isDark ? "#aaa" : "#555"}
        style={[styles.search, { backgroundColor: colors.input, color: colors.text }]}
      />

      {/* NEW — Browse Medicines Button */}
      <TouchableOpacity
        style={[styles.browseButton, { backgroundColor: isDark ? "#0a7d47" : "#0fb764" }]}
        onPress={() => router.push("/browse-medicine")}
      >
        <Text style={styles.browseText}>Browse OTC Medicines</Text>
      </TouchableOpacity>

      {/* Quick Actions */}
{/* Quick Actions - 2 Columns */}
<View style={styles.actionGrid}>
  {quickActions.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.actionBox, { backgroundColor: colors.card }]}
      onPress={() => router.push(item.route)}
    >
      <Text style={styles.actionIcon}>{item.icon}</Text>
      <Text style={[styles.actionLabel, { color: colors.text }]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  ))}
</View>


      {/* Recommended Medicines */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Recommended</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommended.map((item, index) => (
          <View key={index} style={[styles.medicineCard, { backgroundColor: colors.card }]}>
            <Image source={{ uri: item.image }} style={styles.medImage} />
            <Text style={[styles.medTitle, { color: colors.text }]}>{item.name}</Text>
            <Text style={[styles.medSub, { color: isDark ? "#aaa" : "#666" }]}>{item.type}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Machines Nearby */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Nearby Machines</Text>
      {machines.map((item, index) => (
        <View key={index} style={[styles.machineCard, { backgroundColor: colors.card }]}>
          <Text style={[styles.machineName, { color: colors.text }]}>{item.name}</Text>
          
          {/* Fixed dark text visibility */}
          <Text style={[styles.machineDist, { color: isDark ? "#bbb" : "#444" }]}>
            {item.distance}
          </Text>
        </View>
      ))}

    </ScrollView>
  );
}

//
// Dummy Data
//
const quickActions = [
  { icon: "📷", label: "Scan QR", route: "/scan-qr" },
  { icon: "💊", label: "Prescriptions", route: "/PrescriptionScreen" },
  { icon: "🏪", label: "Machines", route: "/MachinesScreen" },
  { icon: "🛒", label: "Cart", route: "/cart" }, // NEW BUTTON
];


const recommended = [
  {
    name: "Paracetamol",
    type: "Tablet",
    image: "https://i.imgur.com/8Km9tLL.png",
  },
  {
    name: "Ibuprofen",
    type: "Capsule",
    image: "https://i.imgur.com/8Km9tLL.png",
  },
  {
    name: "Vitamin C",
    type: "Supplement",
    image: "https://i.imgur.com/8Km9tLL.png",
  },
];

const machines = [
  { name: "City Center Machine", distance: "300m away" },
  { name: "Tech Park Machine", distance: "1.2km away" },
];

//
// Styles
//
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.6,
    marginBottom: 20,
  },
  search: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
  },

  // NEW — Browse Medicines Button
  browseButton: {
    padding: 15,
    borderRadius: 14,
    marginBottom: 20,
  },
  browseText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  actionCard: {
    width: "30%",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },
  // actionIcon: {
  //   fontSize: 30,
  // },
  // actionLabel: {
  //   marginTop: 10,
  //   fontSize: 14,
  //   fontWeight: "500",
  // },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 15,
  },
  medicineCard: {
    width: 120,
    padding: 10,
    borderRadius: 16,
    marginRight: 15,
    alignItems: "center",
  },
  medImage: {
    width: 80,
    height: 80,
  },
  medTitle: {
    fontSize: 15,
    marginTop: 10,
  },
  medSub: {
    fontSize: 12,
    opacity: 0.6,
  },
  machineCard: {
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },
  machineName: {
    fontSize: 16,
    fontWeight: "600",
  },
  machineDist: {
    marginTop: 4,
    fontSize: 13,
  },
  actionGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginBottom: 25,
},

actionBox: {
  width: "48%",     // Two boxes per row
  paddingVertical: 20,
  borderRadius: 16,
  alignItems: "center",
  marginBottom: 14, // gap between rows
},

actionIcon: {
  fontSize: 32,
},

actionLabel: {
  marginTop: 8,
  fontSize: 14,
  fontWeight: "600",
},

});
