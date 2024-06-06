import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // validation fnx
  const validationForm = () => {
    let errors = {};

    if (!username) errors.username = "username is required";
    if (!password) errors.password = "password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }


  // form submission
  const handleSubmit = () => {
    if (validationForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("")
      setErrors({})
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>

        <Text style={styles.label}>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder='enter username'
        />

        {
          errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
        }

        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
        />

        {
          errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
        }


        <Button
          title='Submit'
          onPress={() => {
            handleSubmit();
          }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 10, // shadow
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  }
});
