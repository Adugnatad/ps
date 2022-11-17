import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import person from "../assets/person.jpg"
import HomeIcon from "../assets/HomeIcon.png"
import TransactionIcon from "../assets/TransactionIcon.png"
import UserIcon from "../assets/UserIcon.png"
import { SvgXml } from 'react-native-svg';
import AccountInfo from "../assets/icons/AccountInfo.svg";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios';


const AccountsDetail = () => {

    const [data, setData] = useState({});
    const [accountInfo, setAccountInfo] = useState(true);
    const [Transactions, setTransactions] = useState(false);
    const [balanceVisible, setBalanceVisible] = useState(false);
    const balance = "10200.125";
    const AccountInfoClicked = () => {
        setAccountInfo(true);
        setTransactions(false);
    }
    const TransactionClicked = () => {
        setTransactions(true);
        setAccountInfo(false);
    }
    const QRClicked = () => {

    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <View style={styles.branchDetails}>
                    <Text style={{ marginBottom: 20, fontWeight: "900", fontSize: 20 }}>SBA</Text>
                </View>
                <View>
                    <Text style={{ margin: 10 }}>ADUGNA TADESSE DURESSA</Text>
                    <Text style={{ margin: 10 }}>101212200022</Text>
                    <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
                        <View style={{ marginRight: 10, padding: 5 }}>
                            <Text style={{ fontWeight: "bold" }}>
                                BALANCE
                            </Text>
                            {balanceVisible ? <Text style={{
                                color: "green",
                                fontSize: 16,
                                fontWeight: "900"
                            }}>{balance}</Text> : <Text>
                                {
                                    [...balance].map((c) => "*")
                                }
                            </Text>}
                        </View>

                        <Ionicons name={balanceVisible ? "eye-off" : "eye"} size={30} color="#00ADEF" onPress={() => setBalanceVisible(!balanceVisible)} />

                    </View>
                </View>

            </View>

            <View style={styles.tabs}>
                <TouchableOpacity onPress={QRClicked}>
                    <Image source={HomeIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={AccountInfoClicked}>
                    <Image source={UserIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={TransactionClicked}>
                    <Image source={TransactionIcon} />
                </TouchableOpacity>
            </View>
            {accountInfo && <View style={styles.accountInfo}>
                <View style={styles.photo}>
                    <Image source={person} style={{}} />
                </View>
                <View style={styles.tabContent}>
                    <View style={styles.tabcontents}>
                        <Text style={{ color: "#bbb", marginBottom: 7 }}>Phone No</Text>
                        <Text>+2519736482</Text>
                    </View>
                    <View style={styles.tabcontents}>
                        <Text style={{ color: "#bbb", marginBottom: 7 }}>Email</Text>
                        <Text>example@gmail.com</Text>
                    </View>
                    <View style={styles.tabcontents}>
                        <Text style={{ color: "#bbb", marginBottom: 7 }}>Customer Address</Text>
                        <Text>Ethiopia</Text>
                    </View>
                    <View style={styles.tabcontents}>
                        <Text style={{ color: "#bbb", marginBottom: 7 }}>Account Opening Date</Text>
                        <Text>06-12-1996</Text>
                    </View>
                    <View style={styles.tabcontents}>
                        <Text style={{ color: "#bbb", marginBottom: 7 }}>Account Type</Text>
                        <Text>Savings</Text>
                    </View>
                </View>
            </View>
            }
            {Transactions && <View style={styles.transactionsList}>
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
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 15,
        margin: 10,
    },
    branchDetails: {
        justifyContent: "center",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRightWidth: 2,
        borderLeftWidth: 10,
        borderLeftColor: "#00ADEF",
        borderRightColor: "#ddd",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        // backgroundColor: "yellow",
    },
    tabs: {
        backgroundColor: "#fff",
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 10,
    },

    tab: {
        padding: 5,
        backgroundColor: "#ddd",
    },

    tabContent: {
        margin: 10,
        paddingHorizontal: 10,
    },
    tabcontents: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        marginVertical: 10,
    },

    photo: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    accountInfo: {
        width: "100%",
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

export default AccountsDetail