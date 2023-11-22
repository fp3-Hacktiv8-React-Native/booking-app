import { StyleSheet, Text, SafeAreaView, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const data = [];
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          margin: 10,
          marginTop: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#FFC72C",
          borderWidth: 4,
          borderRadius: 10,
        }}
      >
        <TextInput
          value={input}
          onChange={(text) => setInput(text)}
          placeholder="Enter your Destination"
        />
        <Feather name="search" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
