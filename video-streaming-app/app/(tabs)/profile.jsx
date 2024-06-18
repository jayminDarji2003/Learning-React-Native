import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";
import icons from "../../constants/icons";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import Video from "react-native-video";

const Profile = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({
      username: "",
      email: "",
    });
    router.replace("/sign-in");
    Toast.show({
      type: "success",
      text1: "Logout",
      text2: "Successfully logout 👋",
    });
  };

  // const video = require("./myvideo.mlv");

  return (
    <SafeAreaView className="h-full bg-primary p-5">
      <ScrollView>
        <View>
          <TouchableOpacity className="items-end gap-1" onPress={handleLogout}>
            <Image source={icons.logout} className="h-8 w-8" />
            <Text className="text-sm font-semibold text-gray-100">Logout</Text>
          </TouchableOpacity>

          <View className="my-3 ">
            <View className=" items-center">
              <View className="bg-blue-200 h-14 w-14 justify-center items-center  rounded-lg border border-secondary-100">
                <Text className="text-5xl font-semibold">
                  {user.username.charAt(0)}
                </Text>
              </View>
              <Text className="text-gray-100 my-2 font-pregular text-xl font-semibold">
                {user.username}
              </Text>
            </View>

            <View className="items-center flex-row justify-center mt-3 space-x-10">
              <View className="justify-center items-center">
                <Text className="text-gray-100 font-bold text-lg">10</Text>
                <Text className="text-gray-100 font-bold text-md">Posts</Text>
              </View>
              <View className="justify-center items-center">
                <Text className="text-gray-100 font-bold text-lg">1.2k</Text>
                <Text className="text-gray-100 font-bold text-md">Views</Text>
              </View>
            </View>

            <View className="my-2" style={styles.container}>
              
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  backgroundVideo: {
    width: "100%",
    height: 300,
  },
});

export default Profile;
