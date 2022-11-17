import { StyleSheet, View } from "react-native";
import RootStackScreen from "./naviagtion/RootStack";
import AccountsDetail from './screens/AccountsDetail';

export default function App() {
  return (
    <View style={styles.container}>
      <RootStackScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
