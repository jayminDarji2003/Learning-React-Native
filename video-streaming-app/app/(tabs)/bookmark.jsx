import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";

const Bookmark = () => {
  const { user, isLoggedIn } = useGlobalContext();
  return (
    <SafeAreaView className="h-full bg-primary">
      <Text className="text-white text-xl p-3">
        {isLoggedIn ? "true" : "false"}
      </Text>
      <Text className="text-white text-xl p-3">{user.username}</Text>
      <Text className="text-white text-xl p-3">{user.email}</Text>
    </SafeAreaView>
  );
};

export default Bookmark;
