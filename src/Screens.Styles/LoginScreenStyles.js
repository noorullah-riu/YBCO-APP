import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  buttonTouch: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        //borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: "#fff",
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
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: "#fff",
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
    // fontWeight: "bold",
    color: "#ff9b70",
    //color: "#eed101",
  },
  titlLink: {
    fontSize: 12,
    marginTop: 20,
    alignSelf: "flex-end",
    marginRight: 20,
    // fontWeight: "bold",
    color: "#fff",
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
    color: "#FF9B70",
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
