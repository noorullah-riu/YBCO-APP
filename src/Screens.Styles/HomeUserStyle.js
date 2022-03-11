import { StyleSheet, Platform, Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  imageLogo: {
    height: 60,
    width: 200,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 15,
  },

  imageSlider: {
    borderRadius: 10,
    width: deviceWidth, //"100%",
    height: 300,
  },

  container: {
    justifyContent: "center",
    overflow: "hidden",
    // paddingBottom: 5,
    marginTop: 10,

    // borderColor: "gray",
    //borderWidth: 2,
  },
  containerMain: {
    justifyContent: "center",
    overflow: "hidden",
    paddingBottom: 5,
    backgroundColor: "#f9f9f9",
    flex: 1,
    //height: deviceHeight,
    // marginTop: 20, //this to use for bringing nav down
  },

  containerFlat: {
    // marginTop: 20,
    backgroundColor: "#f4f4f4",
    paddingBottom: 20,
    margin: 10,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  containerFlat2: {
    backgroundColor: "#f9f9f9",
    paddingBottom: 20,
    margin: 10,

    // marginBottom: 10,
  },
  title: {
    marginTop: 5,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    //alignContent: "flex-start",
    // color: "#3e1f3f",
    color: "#ff9b70",
    //marginLeft: 0,
  },

  titless: {
    marginTop: 5,
    //textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    //alignContent: "flex-start",
    // color: "#3e1f3f",
    color: "#ff9b70",
    marginLeft: 10,
  },

  imagesmall: {
    ...Platform.select({
      ios: {
        alignSelf: "center",
        height: 110,
        width: 135,

        borderRadius: 5,
        marginBottom: 5,
        marginTop: 5,
        //   marginLeft: 15,
      },
      android: {
        alignSelf: "center",
        height: 90,
        width: 120,

        borderRadius: 5,
        marginBottom: 5,
        marginTop: 5,
        //   marginLeft: 15,
      },
    }),
  },
});
