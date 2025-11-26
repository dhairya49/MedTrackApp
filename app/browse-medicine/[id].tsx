import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function ProductDetailsScreen() {
  const { name, price, image, isPrescription } = useLocalSearchParams();

  const isRx = isPrescription === "true";

  return (
    <ScrollView style={styles.container}>
      
      {/* Safety Banner */}
      <View style={[styles.banner, isRx ? styles.rxBanner : styles.otcBanner]}>
        <Text style={isRx ? styles.rxBannerText : styles.otcBannerText}>
          {isRx
            ? "This medicine requires a valid prescription. Please upload your doctor’s prescription to continue."
            : "This is an OTC (Over-The-Counter) safe medicine. No prescription required."}
        </Text>
      </View>

      {/* Product Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: image as string }}
          style={styles.productImage}
          resizeMode="cover"
        />
      </View>

      {/* Product Info */}
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>₹{price}</Text>

      <Text style={styles.description}>
        {isRx
          ? "This medicine cannot be purchased without a valid doctor’s prescription. Please upload your prescription before proceeding."
          : "This is a safe over-the-counter medicine commonly used for minor conditions. Always follow dosage instructions."}
      </Text>

      {/* Action Button */}
      <TouchableOpacity
        style={[styles.button, isRx ? styles.buttonDisabled : styles.buttonActive]}
        onPress={() => {
          if (isRx) router.push("/upload-prescription");
          else router.push("/cart");
        }}
      >
        <Text style={styles.buttonText}>
          {isRx ? "Upload Prescription" : "Add to Cart"}
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", // dark mode
    padding: 16,
  },

  banner: {
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  rxBanner: {
    backgroundColor: "#3b0f0f",
    borderWidth: 1,
    borderColor: "#ff4d4d",
  },
  otcBanner: {
    backgroundColor: "#0f3b16",
    borderWidth: 1,
    borderColor: "#4dff88",
  },
  rxBannerText: { color: "#ff7777", fontWeight: "600" },
  otcBannerText: { color: "#7dffb3", fontWeight: "600" },

  imageWrapper: {
    width: "100%",
    height: 250,
    backgroundColor: "#333",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },

  productName: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
  },

  productPrice: {
    color: "#4da6ff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 4,
  },

  description: {
    color: "#ccc",
    fontSize: 15,
    marginTop: 16,
    lineHeight: 22,
  },

  button: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
  },
  buttonDisabled: {
    backgroundColor: "#555",
  },
  buttonActive: {
    backgroundColor: "#0066ff",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
});
