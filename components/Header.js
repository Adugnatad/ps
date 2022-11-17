import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import infinity from '../assets/Infinity.png'
import FontIcons from "@expo/vector-icons/FontAwesome";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <Text style={styles.Title}>PassBook</Text>
                    <Image source={infinity} style={{ width: 70, height: 50 }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "center",
    },
    detailsContainer: {
        flexDirection: "row",
    },
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    Title: {
        fontSize: 25,
        marginRight: 10,
        fontWeight: "900",
    },
});

export default Header