import { StyleSheet, Platform, Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    paddingBottom: 2,
    margin: 0,
    flex: 1,
    alignItems: "center",
  },
  imageLogo: {
    height: 60,
    width: 200,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 15,
  },

  subContainer: {
    ...Platform.select({
      ios: {
        backgroundColor: "white",
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 0,
        borderRadius: 10,
        // height: 200,
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 10,
        width: deviceWidth - 40,
        //  alignItems: "center",

        shadowColor: "#000",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
      },
      android: {
        //paddingBottom: 75,
        backgroundColor: "white",
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 0,
        borderRadius: 10,
        height: 200,
        width: deviceWidth - 40,
        //   alignItems: "center",

        shadowColor: "#000",
        shadowOffset: { width: -10, height: -44 },
        shadowOpacity: 0.4,
        shadowRadius: 23,
        elevation: 5,
      },
    }),
  },
  image: {
    ...Platform.select({
      ios: {
        alignSelf: "center",
        height: 130,
        width: (deviceWidth - 60) / 2,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 5,
        // paddingTop: 50,
        // marginLeft: 5,
      },
      android: {
        alignSelf: "center",
        height: 130,
        width: (deviceWidth - 60) / 2,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 5,
        // paddingTop: 50,
        // marginLeft: 5,
      },
    }),
  },
  Item1: {
    fontSize: 16,
    color: "#FF9B70",
    margin: 5,
    fontWeight: "bold",
    marginLeft: 20,
  },
  Item11: {
    fontSize: 16,
    color: "#FF9B70",
    // margin: 5,
    fontWeight: "bold",
    marginLeft: 20,
  },
  Item99: {
    fontSize: 19,
    color: "red",
    // margin: 5,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 10,
  },

  Item2: {
    fontSize: 18,
    color: "#0D0400",
    marginTop: 5,
    //margin: 5,
    // marginLeft: 20,
  },

  Item3: {
    fontSize: 15,
    color: "#0D0400",
    // margin: 5,
    // marginLeft: 20,
  },

  heading: {
    fontSize: 20,
    color: "#ff9b70",
    textAlign: "center",
  },

  text: {
    // textAlign: "right",
    textAlign: "left",
  },
  text2: {
    // textAlign: "right",
    textAlign: "right",
  },
});
