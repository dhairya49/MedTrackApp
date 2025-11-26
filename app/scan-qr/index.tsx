import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { router } from "expo-router";

export default function ScanQRScreen() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState(false);

  // Ask for camera permission
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Handle QR result
  const handleScan = ({ data }: { data: string }) => {
    if (scanned) return;

    setScanned(true);

    // TEMPORARY: Just log the data and go to checkout
    console.log("Scanned QR:", data);

    // You may route based on data later...
    router.push("/checkout");
  };

  if (hasPermission === null) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>Camera permission denied.</Text>
        <Text style={styles.text}>Enable permissions in settings.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* QR Scanner */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScan}
        style={styles.scanner}
      />

      {/* Scan Again Button */}
      {scanned && (
        <TouchableOpacity
          style={styles.rescanButton}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.rescanText}>Scan Again</Text>
        </TouchableOpacity>
      )}

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

//
// Styles
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scanner: {
    flex: 1,
  },
  centered: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
  rescanButton: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#0fb764",
    width: "60%",
  },
  rescanText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  backButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    padding: 12,
    borderRadius: 12,
    borderColor: "#444",
    borderWidth: 1,
    width: "50%",
  },
  backText: {
    color: "#bbb",
    textAlign: "center",
    fontSize: 15,
  },
});
