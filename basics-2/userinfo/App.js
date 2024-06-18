import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, FlatList, SectionList } from 'react-native';
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
        // horizontal={true}   // this component will make the list horizontal
        // keyExtractor={(item)=> item.toString()}   // to extract key from the item we use keyExtractor

        // the ItemSeperatorComponent takes a JSX and render between every item in the list.
        // it excludes the top and bottom
        // ItemSeparatorComponent={<Text>----------------------------------------------------------------------------------</Text>}

        // when there is empty list then this component will return JSX.
        ListEmptyComponent={<Text>User not found</Text>}

        // adding a header to tht list
        ListHeaderComponent={<Text style={styles.headerText}>USER INFORMATIONS</Text>}

        ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}

      />
      {/*  */}
      {/* <Text>---------------------------------------------</Text> */}
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
  },
  headerText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 20
  }
});

