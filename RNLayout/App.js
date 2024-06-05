import { ScrollView, StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Box style={{ backgroundColor: "lightgreen" }} children={"JAYMIN DARJI"} />
        <Box style={{ backgroundColor: "lightgray" }} children={"JAYMIN DARJI"} />
        <Box style={{ backgroundColor: "lightblue" }} children={"JAYMIN DARJI"} />
        <Box style={{ backgroundColor: "lightpink" }} children={"JAYMIN DARJI"} />
        <Box style={{ backgroundColor: "green" }} children={"JAYMIN DARJI"} />
        <Box style={{ backgroundColor: "red" }} children={"JAYMIN DARJI"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor: "midnightblue",
    borderWidth:6,
    borderColor: "pink"

  },
});
