import { StyleSheet, Text, View } from "react-native";
import React from "react";

const About = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl bg-red-700 p-2 text-white font-bold">
        About
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
