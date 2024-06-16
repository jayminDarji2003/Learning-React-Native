import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormFields from "../../components/FormFields";
import CustomButton from "../../components/CustomButton";
import { Video, ResizeMode } from "expo-av";
import { icons } from "../../constants";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });

  const openPicker = async (selectType) => {
    // open file upload picker
    const result = await DocumentPicker.getDocumentAsync({
      type:
        selectType === "image"
          ? ["image/png", "image/jpg", "image/jpeg"]
          : ["video/mp4", "video/gif"],
    });

    if (!result.canceled) {
      if (selectType === "image") {
        setForm({ ...form, thumbnail: result.assets[0] });
      }
      if (selectType === "video") {
        setForm({ ...form, video: result.assets[0] });
      }
    }
  };

  const submit = async () => {
    if (!form.title || !form.thumbnail || !form.video || !form.prompt) {
      return Alert.alert("Fields required", "Please fill all the fields");
    }

    setUploading(true);

    try {
      // call api
      // post request to server, save data to database

      Alert.alert("Success", "post uploaded successfully");
      router.push("/home");
    } catch (error) {
      throw new Error(error);
      console.log("ERROR OCCURED WHILE CREATING VIDEO");
    } finally {
      setForm({
        title: "",
        video: null,
        thumbnail: null,
        prompt: "",
      });

      setUploading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">Upload video</Text>

        <FormFields
          title="video title"
          value={form.title}
          placeholder="get your video a catch title..."
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles={"mt-5"}
        />

        <View className="mt-5 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload video
          </Text>
          <TouchableOpacity onPress={() => openPicker("video")}>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                className="w-full h-64 rounded-2xl"
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    className="w-12 h-12"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Thumbnail image
          </Text>

          <TouchableOpacity onPress={() => openPicker("image")}>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                resizeMode="cover"
                className="w-full h-64 rounded-2xl"
              />
            ) : (
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row space-x-2">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
                <Text className="text-sm text-gray-100 font-pmedium ">
                  Choose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormFields
          title="AI prompt"
          value={form.prompt}
          placeholder="The prompt you use to create this video"
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          otherStyles={"mt-7"}
        />

        <CustomButton
          title={"submit & publish"}
          handlePress={submit}
          containerStyle={"mt-7"}
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
