import { connect } from "react-redux";
import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import SavedPropertyCard from "../components/SavedPropertyCard";
import { useNavigation } from "@react-navigation/native";

const SavedScreen = ({ savedProperties }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Saved",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <ScrollView>
      {savedProperties.map((property, index) => (
        <SavedPropertyCard
          key={index}
          property={property}
          onRemove={() => handleRemoveSavedProperty(property)}
        />
      ))}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    savedProperties: state.booking.list,
  };
};

export default connect(mapStateToProps)(SavedScreen);
