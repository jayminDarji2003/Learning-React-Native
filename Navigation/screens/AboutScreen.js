import { Button, StyleSheet, Text, View } from "react-native";

export default function AboutScreen({ navigation, route }) {
    const { name } = route.params;

    return (
        <View style={styles.container}>
            <Text>About screen : {name}</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})