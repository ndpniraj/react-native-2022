import React from "react";
import {
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
} from "react-native";

const App = () => {
  // return (
  //   <SafeAreaView style={{ backgroundColor: "red" }}>
  //     <Text
  //       style={{
  //         fontSize: 25,
  //         color: "white",
  //         textAlign: "center",
  //         paddingVertical: 15,
  //       }}
  //     >
  //       Hello Youtube
  //     </Text>
  //     <Image
  //       source={{
  //         uri: "https://images.unsplash.com/photo-1648398779239-487bef48fe08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  //       }}
  //       style={{ width: 150, height: 100, resizeMode: "contain" }}
  //     />
  //     <Image
  //       source={require("./assets/logo.png")}
  //       style={{ width: 100, height: 40, resizeMode: "contain" }}
  //     />

  //     <Text
  //       selectable
  //       style={{ fontSize: 18, padding: 5, color: "white", marginBottom: 30 }}
  //     >
  //       The image gets drawn downscaled or upscaled. Compared to resize, scale
  //       is faster (usually hardware accelerated) and produces higher quality
  //       images. This should be used if the
  //     </Text>

  //     <TextInput style={styles.input} placeholder="email" />
  //     <TextInput
  //       style={[styles.input, styles.marginTop]}
  //       placeholder="password"
  //       multiline
  //       numberOfLines={3}
  //     />

  //     <View style={styles.marginTop}>
  //       <Button title="I am a button" />
  //     </View>
  //   </SafeAreaView>
  // );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={{ marginTop: 80 }}>
        <TextInput
          style={[styles.input, styles.marginTop]}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.8)"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, styles.marginTop]}
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.8)"
          autoCapitalize="none"
          secureTextEntry
        />
      </View>

      <View style={{ padding: 50 }}>
        <Button title="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
    flex: 1,
    backgroundColor: "lightblue",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1.5,
    color: "white",
    paddingTop: 50,
  },

  input: {
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: "black",
    padding: 5,
    borderRadius: 50,
    fontSize: 20,
    paddingHorizontal: 15,
  },
  marginTop: { marginTop: 15 },
});

export default App;
