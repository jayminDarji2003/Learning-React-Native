import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>USER FORM</Text>

      <View style={styles.inputContainer}>

        <Text style={styles.inputLabel}>Enter Name : </Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder='Jhon Doe'
        // secureTextEntry
        //keyboardType='numeric'
        // autoCorrect={true}
        // autoCapitalize='word'
        />

        <Text style={styles.inputLabel}>Enter Email : </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder='example@example.com'
        />

        <Text style={styles.inputLabel}>Enter Password : </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder='**********'
          secureTextEntry
        />

        <Text style={styles.inputLabel}>Enter Address : </Text>
        <TextInput
          style={[styles.input, styles.address]}
          value={address}
          onChangeText={setAddress}
          placeholder='address'
          multiline
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  inputContainer: {
    borderBlockColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    height: "90%",
    borderRadius: 5,
  },
  input: {
    borderWidth: 2,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginVertical: 5,
  },
  address: {
    minHeight: 150,
    textAlignVertical: "top"
  }
});
