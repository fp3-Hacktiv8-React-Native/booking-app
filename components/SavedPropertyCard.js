import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeList } from "../SavedReducer";

const SavedPropertyCard = ({ property }) => {
  const { width, height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const isSaved = useSelector((state) =>
    state.booking.list.some((savedProperty) => savedProperty.id === property.id)
  );

  const handleRemoveSavedProperty = () => {
    dispatch(removeList(property));
  };

  return (
    <View
      style={{
        margin: 15,
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <View>
        <Image
          style={{ height: height / 4, width: width - 280 }}
          source={{ uri: property.image }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ width: 200 }}>{property.name}</Text>
          <AntDesign
            name={isSaved ? "heart" : "hearto"}
            size={24}
            color={isSaved ? "red" : "black"}
            onPress={() => {
              handleRemoveSavedProperty();
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginTop: 7,
          }}
        >
          <MaterialIcons name="stars" size={24} color="green" />
          <Text>{property.rating}</Text>
          <View
            style={{
              backgroundColor: "#6CB4EE",
              paddingVertical: 3,
              borderRadius: 5,
              width: 100,
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
              Genius Level
            </Text>
          </View>
        </View>

        <Text
          style={{
            width: 210,
            marginTop: 6,
            color: "gray",
            fontWeight: "bold",
          }}
        >
          {property.address?.length > 50
            ? property.address.substr(0, 50)
            : property.address}
        </Text>

        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        ></View>

        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Hotel Room : 1 bed
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#6082B6",
            paddingVertical: 2,
            marginTop: 2,
            borderRadius: 5,
            width: 150,
            paddingHorizontal: 3,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Limited Time deal
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SavedPropertyCard;

const styles = StyleSheet.create({});
