import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Image, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("./assets/logo.png")}
      />
      <Button
        onPress={() => {
          alert("We just made our first app!");
        }}
        title="+"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 50,
    padding: 5,
  },
});
// https://reactnative.dev/docs/style
// https://reactnative.dev/docs/image-style-props
// https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c
