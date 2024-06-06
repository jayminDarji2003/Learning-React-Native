import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, FlatList } from 'react-native';
import userData from "./constants/userData.json"

export default function App() {
  // console.log(userData);
  return (
    // <ScrollView>
    //   <SafeAreaView>
    //     <View style={styles.container}>
    //       {
    //         userData.map((user) => {
    //           return <View key={user.id} style={styles.card}>
    //             <Text style={styles.name}>{user.name}</Text>
    //             <Text style={styles.gender}>{user.gender}</Text>
    //             <Text style={styles.rofession}>{user.profession}</Text>
    //           </View>
    //         })
    //       }
    //       <StatusBar style="auto" />
    //     </View>
    //   </SafeAreaView>
    // </ScrollView>

    <View style={styles.container}>
      <FlatList
        data={userData}
        renderItem={({ item }) => {
          return <View key={item.id} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.gender}>{item.gender}</Text>
            <Text style={styles.rofession}>{item.profession}</Text>
          </View>
        }}
      // horizontal={true}
      // keyExtractor={(item)=> item.toString()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: "#F0EBE3"
  },
  card: {
    borderWidth: 2,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 10,
    backgroundColor: "#CDE8E5",
    elevation: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",

  },
  gender: {
    fontWeight: "bold"
  }
});
