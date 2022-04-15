import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <AntDesign name="message1" size={24} color="black" />
      </View>
      <ScrollView>
        <View style={{ height: 1500, backgroundColor: "pink" }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 40,
    resizeMode: "contain",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
});

export default Header;
