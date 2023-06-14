import React from "react";
import { CharacterList } from "./HomeScreen";
import App from "../App";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export const CharacterScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: route.params.image }}
          style={{ width: "100%", height: "100%", borderBottomLeftRadius: 12, borderBottomRightRadius: 12}}
        />
      </View>
      <View style={styles.infoContainer}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 26,
          fontWeight: "700",
          color: "#43B7CD",
          paddingVertical: 10
        }}
      >
        {route.params.name}
      </Text>
          <Text style={styles.infoOne}>Status</Text>
          <Text style={styles.infoTwo}>{route.params.status}</Text>
          <Text style={styles.infoOne}>Gender</Text>
          <Text style={styles.infoTwo}>{route.params.gender}</Text>
          <Text style={styles.infoOne}>Species</Text>
          <Text style={styles.infoTwo}>{route.params.species}</Text>
          <Text style={styles.infoOne}>Origin</Text>
          <Text style={styles.infoTwo}>{route.params.origin}</Text>
          <Text style={styles.infoOne}>Last Location</Text>
          <Text style={styles.infoTwo}>{route.params.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#97CE4C",
    alignItems:'center'
  },
  imageContainer: {
    width: Dimensions.get("screen").width,
    height: (Dimensions.get("screen").height * 40) / 100,
    borderBottomColor: "#43B7CD",
    borderBottomWidth: 4,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  infoContainer: {
    width: (Dimensions.get("screen").width * 90) / 100,
    marginTop: '7%',
    backgroundColor:'white',
    borderWidth: 4,
    borderColor: '#43B7CD',
    borderRadius: 18,
    paddingHorizontal: 10
  },
  infoOne: {
    fontSize: 24,
    fontWeight: "700",
    color: "#43B7CD",
  },
  infoTwo: {
    fontSize: 18,
    fontWeight: "500",
    color: "#43B7CD",
    paddingBottom: 10
  },
});

export default CharacterScreen;
