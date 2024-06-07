import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Alert, Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: "Welcome home",
            headerStyle: {
              backgroundColor: "gray",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => {
              return <Pressable onPress={() => Alert.alert("menu pressed", "sorrry menu pressed")}>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Menu</Text>
              </Pressable>
            },
            contentStyle: {
              backgroundColor: "#fff"
            }
          }}
        />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}