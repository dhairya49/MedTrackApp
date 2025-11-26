import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, useColorScheme } from "react-native";

export default function ProfileScreen() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const colors = {
    background: isDark ? "#0B0B0D" : "#f4f4f4",
    pageBg: isDark ? "#050506" : "#fff",
    textPrimary: isDark ? "#FFFFFF" : "#111111",
    textSecondary: isDark ? "#BDBDBD" : "gray",
    cardBg: isDark ? "#111214" : "#fff",
    buttonBg: isDark ? "#0a84ff" : "#007AFF",
    logoutBg: isDark ? "#1b1b1b" : "#fff",
    border: isDark ? "#222225" : "#eee",
    danger: "#D9534F",
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { marginTop: 24 }]}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
          style={[styles.avatar, { borderColor: isDark ? "#222" : "#e6e6e6" }]}
        />
        <Text style={[styles.name, { color: colors.textPrimary }]}>Dhairya Patel</Text>
        <Text style={[styles.email, { color: colors.textSecondary }]}>dhairya@example.com</Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.pageBg, borderColor: colors.border }]}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Your Details</Text>

        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>Phone</Text>
          <Text style={[styles.value, { color: colors.textPrimary }]}>+91 98765 43210</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>Address</Text>
          <Text style={[styles.value, { color: colors.textPrimary }]}>123, College Road, India</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>Age</Text>
          <Text style={[styles.value, { color: colors.textPrimary }]}>21</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>Gender</Text>
          <Text style={[styles.value, { color: colors.textPrimary }]}>Male</Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: colors.buttonBg }]}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutBtn, { backgroundColor: colors.logoutBg, borderColor: colors.border }]}>
        <Text style={[styles.logoutText, { color: colors.danger }]}>Logout</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    alignItems: "center",
    marginBottom: 16,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 2,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
  },

  email: {
    fontSize: 14,
  },

  card: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },

  label: {
    fontSize: 15,
  },

  value: {
    fontSize: 15,
    fontWeight: "600",
  },

  button: {
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  logoutBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
