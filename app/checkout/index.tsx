import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Payment</Text>

      {/* Payment Methods */}
      <Text style={styles.sectionTitle}>Select Payment Method</Text>

      <TouchableOpacity
        style={[
          styles.methodCard,
          selectedMethod === "UPI" && styles.selectedCard,
        ]}
        onPress={() => setSelectedMethod("UPI")}
      >
        <Text style={styles.methodText}>UPI (Google Pay / PhonePe / Paytm)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.methodCard,
          selectedMethod === "Card" && styles.selectedCard,
        ]}
        onPress={() => setSelectedMethod("Card")}
      >
        <Text style={styles.methodText}>Credit / Debit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.methodCard,
          selectedMethod === "COD" && styles.selectedCard,
        ]}
        onPress={() => setSelectedMethod("COD")}
      >
        <Text style={styles.methodText}>Cash on Delivery</Text>
      </TouchableOpacity>

      {/* Summary Section */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Order Summary</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Item Total</Text>
          <Text style={styles.summaryValue}>₹150</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax (18%)</Text>
          <Text style={styles.summaryValue}>₹27</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery</Text>
          <Text style={styles.summaryValue}>FREE</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalValue}>₹177</Text>
        </View>
      </View>

      {/* Pay Button */}
      <TouchableOpacity
        disabled={!selectedMethod}
        style={[
          styles.payButton,
          !selectedMethod && { backgroundColor: "#333" },
        ]}
        // onPress={() => router.push("/orders")}
      >
        <Text style={styles.payButtonText}>
          {selectedMethod ? "Complete Payment" : "Select Payment Method"}
        </Text>
      </TouchableOpacity>

      {/* Back */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  heading: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  methodCard: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#222",
    marginBottom: 12,
  },
  selectedCard: {
    borderColor: "#0fb764",
    backgroundColor: "#1a3b2f",
  },
  methodText: {
    color: "#fff",
    fontSize: 16,
  },

  summaryContainer: {
    backgroundColor: "#111",
    padding: 16,
    marginTop: 20,
    borderRadius: 12,
  },
  summaryTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    color: "#aaa",
    fontSize: 15,
  },
  summaryValue: {
    color: "#aaa",
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#222",
    marginVertical: 10,
  },
  totalLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  totalValue: {
    color: "#0fb764",
    fontSize: 18,
    fontWeight: "700",
  },

  payButton: {
    backgroundColor: "#0fb764",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  payButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  backBtn: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#444",
    marginTop: 14,
  },
  backText: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
  },
});
