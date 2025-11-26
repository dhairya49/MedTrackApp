import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

const MEDICINES = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    price: 30,
    image: "https://picsum.photos/seed/paracetamol/300",
    isPrescription: false,
  },
  {
    id: "2",
    name: "Amoxicillin 250mg",
    price: 120,
    image: "https://picsum.photos/seed/amox/300",
    isPrescription: true,
  },
  {
    id: "3",
    name: "Digene Antacid",
    price: 45,
    image: "https://picsum.photos/seed/digene/300",
    isPrescription: false,
  },
];

export default function BrowseMedicineScreen() {
  const openProduct = (item: any) => {
    router.push({
      pathname: `/browse-medicine/${item.id}`,
      params: {
        name: item.name,
        price: String(item.price),
        image: item.image,
        isPrescription: String(item.isPrescription),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse Medicines</Text>

      <FlatList
        data={MEDICINES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => openProduct(item)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>₹{item.price}</Text>
              <Text style={item.isPrescription ? styles.rx : styles.otc}>
                {item.isPrescription ? "Prescription Required" : "OTC Medicine"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 16,
  },

  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    padding: 12,
    borderRadius: 12,
    marginBottom: 14,
    alignItems: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },

  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    color: "#4da6ff",
    fontSize: 14,
    marginTop: 4,
  },

  rx: {
    color: "#ff7373",
    marginTop: 4,
    fontWeight: "600",
  },

  otc: {
    color: "#7dffb3",
    marginTop: 4,
    fontWeight: "600",
  },
});
