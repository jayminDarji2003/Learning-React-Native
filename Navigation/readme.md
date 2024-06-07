# Navigation in React Native

<b>

- Navigation is very important part in every application whether it is web app or mobile app.

- The go to solution for navigation is React Navigation Library.

## React Navigation Provides

1. Stack Navigation
   <br>
2. Drawer Navigation
   <br>
3. Tab Navigation

### 1. Stack Navigation

- Stack navigation is working as a stack, each screen puts on the top of the other screen and when we go back it removes.

Run following commands :-

```
    npm install @react-navigation/native
```

```
    npx expo install react-native-screens react-native-safe-area-context
```

```
    npm install @react-navigation/native-stack
```

To work with navigation we need wrap the app to <i>NavigationContainer</i>

example:

```
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

Stack Navigation example:-

```
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Navigate between screens.

We have two different ways to navigate between screens

1. navigation prop
2. useNavigator hook

Example of navigation prop

```
export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>About screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

```

Example of useNavigator hook

```
export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <Button
                title="Go to about"
                onPress={() => navigation.navigate('About')}
            />
        </View>
    )
}
```

## Passing data between screens.

```
<Button title="Go to about"
        onPress={() => navigation.navigate('About', {
            name: "jaymin darji"
        })}
/>
```

## Access data

```
export default function AboutScreen({route }) {
    const { name } = route.params;

    return (
            <Text>About screen : {name}</Text>
    )
}

```
