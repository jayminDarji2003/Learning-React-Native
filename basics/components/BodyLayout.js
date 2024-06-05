import { useState } from "react";
import { Image, Text, View, ScrollView, Button, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
import Greet from "./Greet";
const logoImage = require("../assets/adaptive-icon.png")

export default function BodyLayout() {
  const [isViewArtical, setIsViewArtical] = useState(false);

  return (
    <>
      <View style={{
        height: 1000,
        backgroundColor: "plum",
        padding: 30,
        display: "flex",
        justifyContent: "center",
        gap: 10
      }}>
        <Text style={{ fontSize: 35, fontWeight: "bold", textAlign: "center" }}>CODEWITHJAYMIN</Text>
        <Button title="View Aritical" onPress={() => setIsViewArtical(true)} color={"midnightblue"} />

        {/* <ActivityIndicator size={"large"} color={"midnightblue"} animating={false} /> */}

        <Button
          title="alert"
          color={"midnightblue"}
          onPress={() => Alert.alert("Invalid data", "Data not fetched successfully", [
            {
              title: "Cancel",
              onPress: () => console.log("Alert cancelled")
            },
            {
              title: "ok",
              onPress: () => console.log("Alert ok")
            }
          ])} />

        <Greet name={"Jaymin Darji"} />
      </View>

      <Modal
        visible={isViewArtical}
        onRequestClose={() => setIsViewArtical(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >

        <ScrollView>
          {/* <StatusBar backgroundColor="lightgreen" hidden /> */}

          <View style={{
            padding: 30,
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "center",
            // height:850,
            gap: 10
          }}>
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={{ height: 300, width: 300 }} />
            <Text style={{
              fontSize: 20,
              textAlign: "justify"
            }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos magnam sequi earum necessitatibus ut obcaecati labore consequuntur ipsum iusto odit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odio adipisci, placeat dolor nesciunt fugiat amet reprehenderit eius debitis, fuga, voluptatibus perspiciatis esse laboriosam. Porro nisi cupiditate incidunt perspiciatis vero explicabo non reprehenderit numquam consectetur? Sapiente ipsam temporibus totam minima magnam officia earum voluptatem et? Quis ipsa consequun, quos quae cum adipisci qui possimus, tempore dolorum. Illum impedit quae deleniti iste pariatur quibusdam. Ipsa quidem placeat adipisci, itaque laboriosam excepturi! Tempora fugit quam at sit illum pariatur, aliquam culpa cupiditate praes libero? Temporibus iure ab reiciendis eos? Suscipit ab tenetur voluptas voluptatem vero quod, sit doloremq
            </Text>
            <Button title="Close Aritical" onPress={() => setIsViewArtical(false)} color={"midnightblue"} />
          </View>
        </ScrollView>
      </Modal >
    </>
  );
}