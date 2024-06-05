import { StyleSheet, View, Text } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightgreen" }} children={"box 1"} />
      <Box style={{ backgroundColor: "lightgray" }} children={"box 2"} />
      <Box style={{ backgroundColor: "lightblue" }} children={"box 3"} />
      <Box style={{ backgroundColor: "lightblue" }} children={"box 3"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 60,
    backgroundColor: "midnightblue",
    borderWidth: 6,
    borderColor: "pink",
    flexDirection: "column",
    flexWrap: "wrap",
    height: 300
    // justifyContent: "center",
    // alignItems: "baseline",

  },

});
