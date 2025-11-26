import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function PrescriptionDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Prescription Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Prescription ID</Text>
        <Text style={styles.value}>{id}</Text>

        <Text style={styles.label}>Doctor</Text>
        <Text style={styles.value}>Dr. Sharma</Text>

        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>2025-01-10</Text>
      </View>

      {/* 🚀 SCAN QR BUTTON */}
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => router.push("/scan-qr")}
      >
        <Text style={styles.scanText}>Scan QR to Dispense Medicine</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 16 },
  heading: { fontSize: 24, fontWeight: "700", color: "white", marginBottom: 16 },

  card: {
    backgroundColor: "#1b1b1b",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: { color: "#888", marginTop: 8, fontSize: 14 },
  value: { color: "#fff", fontSize: 16, fontWeight: "600" },

  scanButton: {
    backgroundColor: "#0A84FF",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  scanText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
