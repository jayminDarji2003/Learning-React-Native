import { View, Text, StyleSheet, } from "react-native"

export default function Box({ children, style }) {
    return (
        <View>
            <View style={[style, styles.item]}>
                <Text style={styles.innerText}>{children}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        height: 90,
        // width: 200,
        // backgroundColor: "red"
    },
    innerText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
})