import BodyLayout from "./components/BodyLayout";

import { StyleSheet, Text, View } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.innserText}>
        CODEWITHJAYMIN
      </Text>

      <View>
        <View style={[styles.box, styles.bgLightBlue]}>
          <Text style={styles.innserText}>Light Blue Box</Text>
        </View>
        <View style={[styles.box, styles.bgLightGreen]}>
          <Text style={styles.innserText}>Light Green Box</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // padding: 40,
    flex: 1,
    backgroundColor: "midnightblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  innserText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  box: {
    height: 300,
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 20,
    elevation:10,
    shadowColor: "white",
  },
  bgLightBlue: {
    backgroundColor: "lightblue",
  },
  bgLightGreen: {
    backgroundColor: "lightgreen",
  }
})