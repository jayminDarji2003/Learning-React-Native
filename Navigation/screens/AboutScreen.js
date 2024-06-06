import { Button, StyleSheet, Text, View } from "react-native";

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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})