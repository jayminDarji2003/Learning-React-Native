import { View, Text, StyleSheet, Platform, Image, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌲" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
}

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weakness
}) {

    const { borderColor, emoji } = getTypeDetails(type);

    const handleClicked = () => {
        Toast.show({
            type: 'success',
            text1: `${emoji} ${type}`,
            text2: "Clicked on the button"
        });
    }


    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️ {hp}</Text>
            </View>

            <View>
                <Image source={image} style={styles.image} resizeMode="contain" accessibilityLabel={`${name} Pokemon`} />
            </View>

            <TouchableOpacity style={styles.typeContainer} onPress={handleClicked}>
                <View style={[styles.badge, { borderColor: borderColor }]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.moveContainer}>
                <Text style={styles.moveText}>
                    Moves : {moves?.join(', ')}
                </Text>
            </View>

            <View style={styles.weeknessContainer}>
                <Text style={styles.weeknessText}>
                    Weakness : {weakness?.join(', ')}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 15,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        })
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 32,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 22,
        fontWeight: "bold"
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16
    },
    typeContainer: {
        marginBottom: 40,
        alignItems: "center"
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    moveContainer: {
        marginBottom: 16,
    },
    moveText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    weeknessContainer: {
        marginBottom: 8,
    },
    weeknessText: {
        fontSize: 18,
        fontWeight: "bold"
    }
});