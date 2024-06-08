import { StyleSheet, View } from "react-native";

import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link
        href="/about"
        className="font-pblack text-4xl border-2 p-3 my-3 bg-cyan-100"
      >
        go to About
      </Link>
      <Link
        href="/contact"
        className="font-pblack text-4xl border-2 p-3 my-3 bg-cyan-100"
      >
        go to contact
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
