import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getCharacters() {
      try {
        await fetch("https://rickandmortyapi.com/api/character")
          .then((response) => response.json())
          .then((responseJson) => setData(responseJson));
      } catch {
        console.error("Couldn't fetch data.");
      }
    }
    getCharacters();
  }, []);

  const characterData = data?.results;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{
            width: 250,
            height: 65,
          }}
          source={require("../assets/Rick_and_Morty.png")}
        />
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={characterData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ marginBottom: 10 }}
              onPress={() => {
                navigation.navigate("CharacterScreen", {
                  name: item.name,
                  gender: item.gender,
                  species: item.species,
                  origin: item.origin.name,
                  status: item.status,
                  image: item.image,
                  location: item.location.name
                });
              }}
            >
              <View style={styles.characterCard}>
                <Image
                  style={{ width: 142, height: 142, borderRadius: 8 }}
                  source={{ uri: item.image }}
                />
                <View style={styles.characterInfo}>
                  <Text style={styles.info}>Name</Text>
                  <Text style={styles.infos}>{item.name}</Text>
                  <Text style={styles.info}>Status</Text>
                  <Text style={styles.infos}>{item.status}</Text>
                  <Text style={styles.info}>Last Location</Text>
                  <Text style={styles.infos}>{item.location.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#97CE4C",
    alignItems: "center",
  },

  header: {
    width: Dimensions.get("screen").width,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    top: "7%",
  },

  cardContainer: {
    width: (Dimensions.get("screen").width * 90) / 100,
    height: (Dimensions.get("screen").height * 70) / 100,
    marginTop: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  characterCard: {
    width: (Dimensions.get("screen").width * 80) / 100,
    height: 150,
    backgroundColor: "white",
    flexDirection: "row",
    borderWidth: 4,
    borderColor: "#43B7CD",
    borderRadius: 12,
    alignItems: "center",
  },

  characterInfo: {
    justifyContent: "center",
    paddingLeft: 10,
  },

  info: {
    color: "#43B7CD",
    fontWeight: "700",
  },

  infos: {
    color: "#43B7CD",
    fontWeight: "500",
    paddingBottom: 5,
  },
});
