import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import AccountsDetail from './AccountsDetail'

const Transactions = () => {
    return (
        <View style={styles.container}>
            <AccountsDetail />
            <View style={styles.transactionsList}>
                <View style={styles.transactions}>
                    <View style={styles.transactionDetails}>
                        <MaterialIcons name="arrow-top-right-thin" size={30} color="red" />
                        <View style={{ marginLeft: 5 }}>
                            <Text>UPI Ref no. 21618165584 - Bank</Text>
                            <Text>10/06/2022</Text>
                        </View>
                    </View>

                    <View>
                        <Text>60.00</Text>
                        <Text style={{ color: "red" }}>Dr</Text>
                    </View>
                </View>
                <View style={styles.transactions}>
                    <View style={styles.transactionDetails}>
                        <MaterialIcons name="arrow-bottom-right-thin" size={30} color="green" />
                        <View style={{ marginLeft: 5 }}>
                            <Text>UPI Ref no. 21618165584 - Bank</Text>
                            <Text>10/06/2022</Text>
                        </View>
                    </View>

                    <View>
                        <Text>60.00</Text>
                        <Text style={{ color: "green" }}>Cr</Text>
                    </View>
                </View>
                <View style={styles.transactions}>
                    <View style={styles.transactionDetails}>
                        <MaterialIcons name="arrow-bottom-right-thin" size={30} color="green" />
                        <View style={{ marginLeft: 5 }}>
                            <Text>UPI Ref no. 21618165584 - Bank</Text>
                            <Text>10/06/2022</Text>
                        </View>
                    </View>

                    <View>
                        <Text>60.00</Text>
                        <Text style={{ color: "green" }}>Cr</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    transactionsList: {
        marginTop: 10,
        padding: 10,
        width: "90%",
        borderWidth: 1,
        borderColor: "#ddd",

    },
    transactions: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        padding: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    transactionDetails: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
        borderRightWidth: 1,
        borderColor: "#ddd",
    },
});

export default Transactions