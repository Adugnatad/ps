import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import coopLogo from '../assets/coopLogo.png'
import advert from '../assets/advert.png'
const Accounts = ({ navigation }) => {

    const handleCardClick = () => {
        navigation.navigate("AccountDetails");
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.advertisement}>
                <Image source={advert} style={{ width: 300, height: 100 }} />
            </View>
            <TouchableOpacity style={styles.cardClick} onPress={handleCardClick}>
                <View style={styles.card}>
                    <View style={styles.cardstyle1}>
                        <View style={styles.details}>
                            <Image source={coopLogo} style={{ width: 120, height: 50, marginRight: 10 }} />
                            <View>
                                <Text style={{ color: "orange", fontSize: 16 }}> Bank Details</Text>
                                <Text style={{ color: "orange", fontSize: 13 }}>Check Your Bank Balance</Text>
                            </View>
                        </View>
                        <Text style={{ color: "orange", marginTop: 20, fontSize: 16 }}>View balance: 1,25,4####</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    advertisement: {
        padding: 20,
        paddingVertical: 25,
        marginTop: 30,
        width: "90%",
        backgroundColor: "#fff",
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
        marginVertical: 10,
        width: "90%",
        borderRadius: 15,
    },
    cardClick: {

    },
    details: {
        flexDirection: "row",
    },

    cardstyle1: {

    },
})

export default Accounts