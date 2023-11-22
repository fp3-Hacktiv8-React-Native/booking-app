import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const SearchResults = ({ data, input, setInput }) => {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }
            return (
              <Pressable>
                <View>
                  <Image
                    style={{ width: 70, height: 70 }}
                    source={{ uri: item.placeImage }}
                  />
                </View>
                <View>
                  <Text>{item.place}</Text>
                  <Text>{item.shortDescription}</Text>
                  <Text>{item.properties.length}</Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
