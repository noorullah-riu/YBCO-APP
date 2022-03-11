import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  buttondropdown: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        //borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        backgroundColor: "#ff9b70",
        padding: 10,
        //  borderRadius: 20,
      },
      android: {
        alignItems: "center",
        //borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        backgroundColor: "#ff9b70",
        padding: 5,
        //borderRadius: 20,
      },
    }),
  },

  buttonTouch: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        //borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        backgroundColor: "#ff9b70",
        padding: 10,
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
        marginTop: 0,
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
  dropdownelement: {
    ...Platform.select({
      ios: {
        height: 0,
        width: 200,
      },
      android: {
        height: 100,
        width: 200,
        
      },
    }),
  },
  imageLogo: {
    height: 250,
    width: 300,
    marginTop: -60,
    //marginBottom: 0,
    //marginTop: 0,
    // marginLeft: 15,
  },

  titlebtn: {
    fontSize: 18,
    // fontWeight: "bold",
    color: "#fff",
    //color: "#eed101",
  },
  titlLink: {
    fontSize: 12,
    marginTop: 10,
    alignSelf: "flex-end",
    marginRight: 20,
    // fontWeight: "bold",
    color: "#ff9b70",
    marginBottom: 10,
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
  titlLinkSignUp1: {
    fontSize: 28,
    alignSelf: "center",

    //: "center",

    fontWeight: "bold",
    // color: "blue",
    color: "#ff9b70",
  },
  titlLinkSignUp2: {
    marginTop: 10,
    fontSize: 18,
    alignSelf: "center",

    //: "center",

    // fontWeight: "bold",
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
