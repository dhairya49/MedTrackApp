import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>

      {/* cart items will go here */}

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => router.push("/checkout")}
      >
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#111" },
  heading: { fontSize: 24, color: "white", fontWeight: "700", marginBottom: 20 },
  checkoutButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  checkoutText: { color: "white", fontSize: 18, textAlign: "center" },
});
