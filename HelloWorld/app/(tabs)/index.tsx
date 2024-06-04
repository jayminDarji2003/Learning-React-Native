import { Button, Image, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "green",
        padding: 40,
      }}
    >
      <Text>Hello world</Text>
      <Button
        title="submit"
        onPress={() => {
          console.log("button pressed");
        }}
      />
    </View>
  );
}
