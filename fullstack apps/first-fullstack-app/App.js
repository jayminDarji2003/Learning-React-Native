import { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, FlatList, Text, ActivityIndicator, TextInput, Button, ScrollView, Keyboard, Alert } from 'react-native';

export default function App() {
  // get request
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  // post request
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isPostAdded, setIsPostAdded] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      // console.log(data)
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("ERROR OCCURED WHILE FETCHING DATA")
      console.log(error)
    }
  }

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
    setIsPostAdded(false);
  }


  const handleSendData = async () => {
    Keyboard.dismiss();   // dismiss the keyboard

    if (title.trim() === "" || body.trim() === "") {
      Alert.alert("Validation Error", "Both fields are required and cannot be empty.");
      return;
    }

    if (isPostAdded) {
      Alert.alert("SORRY 😭", "You can not add second post.")
      return;
    }


    try {
      setIsPosting(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8"
        }
      })

      const newPost = await response.json();
      // console.log(data);
      setPosts([newPost, ...posts])
      setIsPosting(false);
      setTitle("")
      setBody("")
      setIsPostAdded(true);

    } catch (error) {
      setIsPosting(false);
      console.log("ERROR OCCURED WHILE SENDING DATA TO SERVER")
      console.log(error)
    }
  }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.inputContianer}>
        <View>
          <Text style={styles.text}>ADD POST</Text>
        </View>
        <View>
          <Text style={styles.label}>Enter Title : </Text>
          <TextInput
            style={styles.input}
            placeholder='enter title'
            value={title}
            onChangeText={setTitle}

          />
        </View>
        <View>
          <Text style={styles.label} > Enter Description: </Text>
          <TextInput
            style={styles.input}
            placeholder='enter description'
            value={body}
            onChangeText={setBody}
          />
        </View>

        <Button
          title={isPosting ? "adding.." : "add"}
          onPress={handleSendData}
          disabled={isPosting}
        />

      </View>

      <View style={styles.listContainer}>

        {
          loading ? <View style={styles.loading}>
            <ActivityIndicator size={"large"} />
            <Text>LOADING....</Text>
          </View>
            : <FlatList
              data={posts}
              renderItem={({ item }) => {
                return (
                  <View style={styles.postContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                  </View>
                )
              }}

              ListEmptyComponent={<Text>There is not post data!!</Text>}
              ItemSeparatorComponent={<View style={styles.seperator} />}
              ListHeaderComponent={<Text style={styles.headerText}>POSTS</Text>}
              ListFooterComponent={<Text style={styles.footerText}>The End</Text>}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
        }

      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  postContainer: {
    borderWidth: 2,
    borderColor: "gray",
    padding: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  },
  body: {
    fontSize: 20,
    fontWeight: "semibold"
  },
  seperator: {
    marginVertical: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  footerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputContianer: {
    padding: 20,
    justifyContent: "center",
    gap: 20,
    borderWidth: 2,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DAC0A3",
    padding: 5,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 10,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  }
});









