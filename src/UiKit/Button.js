import React from "react";
import { Platform } from "react-native";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, btnText }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonTouch}>
      <Text style={styles.titlebtn}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTouch: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        //borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        width:"90%",
        backgroundColor: "#ff9b70",
        padding: 15,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
      },
      android: {
        alignItems: "center",
        //borderWidth: 1,
        width:"90%",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: "#ff9b70",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 10, height: 4 },
        shadowOpacity: 1.4,
        shadowRadius: 1,
        elevation: 2,
      },
    }),
  },
  titlebtn: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#fff",
    //color: "#eed101",
  },
});

export { Button };
