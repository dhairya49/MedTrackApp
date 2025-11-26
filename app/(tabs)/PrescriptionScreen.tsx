import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { router } from "expo-router";

const PRESCRIPTIONS = [
  { id: "rx1", doctor: "Dr. Sharma", date: "2025-01-10" },
  { id: "rx2", doctor: "Dr. Patel", date: "2025-02-18" },
  { id: "rx3", doctor: "Dr. Mehta", date: "2025-03-02" },
];

export default function PrescriptionScreen() {
  const openPrescription = (id: string) => {
    router.push(`/prescriptions/${id}`);
  };

  const goToUpload = () => {
    router.push("/upload-prescription");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Your Prescriptions</Text>

        <TouchableOpacity style={styles.uploadBtn} onPress={goToUpload}>
          <Text style={styles.uploadText}>Upload</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={PRESCRIPTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => openPrescription(item.id)}
          >
            <Text style={styles.text}>Prescription ID: {item.id}</Text>
            <Text style={styles.sub}>Doctor: {item.doctor}</Text>
            <Text style={styles.sub}>Date: {item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 16 },
  
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  heading: { fontSize: 24, fontWeight: "700", color: "white" },

  uploadBtn: {
    backgroundColor: "#3b82f6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  uploadText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },

  card: {
    backgroundColor: "#1a1a1a",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  text: { color: "white", fontSize: 16, fontWeight: "600" },
  sub: { color: "#aaa", marginTop: 4 },
});
