import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  buttonTouch: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        //borderWidth: 1,

        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
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
        marginTop: 20,
        //borderWidth: 1,
        marginLeft: 40,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: "#ff9b70",
        padding: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 10, height: 4 },
        shadowOpacity: 1.4,
        shadowRadius: 1,
        elevation: 2,
      },
    }),
  },

  imageLogo: {
    height: 250,
    width: 300,

    //marginBottom: 0,
    marginTop: -60,
    // marginLeft: 15,
  },

  titlebtn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",

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
  titlLinkLogin: {
    fontSize: 21,
    alignSelf: "center",
    marginLeft: 20,
    marginRight: 20,

    //: "center",

    fontWeight: "bold",
    // color: "blue",
    color: "#000",
  },
  titleDescription: {
    fontSize: 16,
    alignSelf: "center",
    marginLeft: 20,
    marginRight: 20,

    //: "center",

    //   fontWeight: "bold",
    // color: "blue",
    color: "#000",
  },
  error: {
    fontSize: 12,
    marginLeft: 25,
    marginTop: -15,
    color: "red",
  },
});
