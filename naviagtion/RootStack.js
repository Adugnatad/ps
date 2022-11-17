import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import SignUpScreen1 from "../screens/SignUpScreen1";
import SignInScreen from "../screens/SignInScreen";
import OTPVerification from "../screens/OTPVerification";
import Accounts from "../screens/Accounts";
import AccountsDetails from "../screens/AccountsDetail";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({ navigation }) => ({
        header: () => <Header navigation={navigation} title="About GameZone" />,
      })}>
        <Stack.Screen name="AccountsScreen" component={Accounts} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="AccountDetails" component={AccountsDetails} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default RootStackScreen;
