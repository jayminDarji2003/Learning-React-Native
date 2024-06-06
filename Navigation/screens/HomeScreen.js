import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})