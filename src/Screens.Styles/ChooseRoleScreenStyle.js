import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  CardBtn: {
    backgroundColor: "#fff",
    width: "90%",
    marginLeft: 20,
    paddingBottom: 60,
    borderRadius: 30,
  },

  imageLogo: {
    height: 250,
    width: 300,

    //marginBottom: 0,
    // marginTop: -60,
    // marginLeft: 15,
  },

  titlebtn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff9b70",
    //color: "#eed101",
  },
  titlLink: {
    fontSize: 12,
    marginTop: 20,
    alignSelf: "flex-end",
    marginRight: 20,
    // fontWeight: "bold",
    color: "#ff9b70",
    marginBottom: 20,
    //color: "#eed101",
  },
  titlLinkHome: {
    fontSize: 14,
    marginTop: 10,
    alignSelf: "center",
    marginRight: 20,
    // fontWeight: "bold",
    // color: "blue",
    color: "#727c8e",
  },

  TitleMain: {
    fontSize: 21,
    marginVertical: 160,
    alignSelf: "center",
    fontWeight: "bold",
    // color: "blue",
    color: "#ff9b70",
  },

  titlLinkLogin: {
    fontSize: 28,
    alignSelf: "center",

    //: "center",

    fontWeight: "bold",
    // color: "blue",
    color: "#ff9b70",
  },
  error: {
    fontSize: 12,
    marginLeft: 25,
    marginTop: -15,
    color: "red",
  },
});
