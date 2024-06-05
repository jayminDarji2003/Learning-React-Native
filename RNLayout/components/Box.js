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
        // flex: 1
        height: 90,
        width: 180,
        // backgroundColor: "red"
    },
    innerText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
})