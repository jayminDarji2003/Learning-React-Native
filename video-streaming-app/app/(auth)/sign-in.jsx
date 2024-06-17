import { View, Text, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormFields from "../../components/FormFields";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";
import axios from "axios";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmiting, setIsSubmiting] = useState(false);

  // using the context
  const { setIsLoggedIn, setUser } = useGlobalContext();

  const submit = async () => {
    if (!form.password || !form.email) {
      Alert.alert("Error 😭", "Please fill all required fields");
    }

    setIsSubmiting(true);

    try {
      const result = await axios.post("http://192.168.119.122:4000/login", {
        email: form.email,
        password: form.password,
      });
      //console.log("RESULT OF CREATING USER => ", result.data.user);

      const username = result?.data?.user?.username;
      const email = result?.data?.user?.email;

      //set it to global state.....
      // it is done by context
      setIsLoggedIn(true);
      setUser({
        email: email,
        username: username,
      });

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error 😭", error.message);
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormFields
            title="Email"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="enter email"
          />
          <FormFields
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            otherStyles="mt-7"
            placeholder="enter password"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyle="mt-7"
            isLoading={isSubmiting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
