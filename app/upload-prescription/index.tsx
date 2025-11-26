import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useColorScheme,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

export default function UploadPrescriptionScreen() {
  const [image, setImage] = useState<string | null>(null);
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const colors = {
    background: isDark ? "#0B0B0D" : "#f4f4f4",
    cardBg: isDark ? "#111214" : "#fff",
    textPrimary: isDark ? "#FFFFFF" : "#111111",
    textSecondary: isDark ? "#BDBDBD" : "gray",
    buttonBg: isDark ? "#0a84ff" : "#007AFF",
    border: isDark ? "#222225" : "#ddd",
  };

  async function pickImage() {
    let res = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!res.canceled) {
      setImage(res.assets[0].uri);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Upload Prescription
      </Text>

      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Please upload a valid doctor’s prescription to proceed with this
        medicine.
      </Text>

      <TouchableOpacity
        onPress={pickImage}
        style={[styles.uploadBox, { backgroundColor: colors.cardBg, borderColor: colors.border }]}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={styles.preview}
            resizeMode="cover"
          />
        ) : (
          <Text style={{ color: colors.textSecondary }}>Tap to choose image</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.buttonBg }]}
        onPress={() => {
          if (!image) return;
          router.push("/cart"); // after upload
        }}
      >
        <Text style={styles.buttonText}>Submit Prescription</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.cancelButton, { borderColor: colors.border }]}
        onPress={() => router.back()}
      >
        <Text style={[styles.cancelText, { color: colors.textPrimary }]}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },

  uploadBox: {
    width: "100%",
    height: 280,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 20,
  },

  preview: {
    width: "100%",
    height: "100%",
  },

  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  cancelButton: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },

  cancelText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
