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

  slide: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  imageSlider: {
    borderRadius: 10,
    width: deviceWidth, //"100%",
    height: 300,
  },

  container: {
    justifyContent: "center",
    overflow: "hidden",
    paddingBottom: 5,
    marginTop: 10,
    // borderColor: "gray",
    //borderWidth: 2,
  },
  containerMain: {
    justifyContent: "center",
    overflow: "hidden",
    paddingBottom: 5,
    backgroundColor: "#fff",
    marginTop: 20, //this to use for bringing nav down
  },

  containerFlat: {
    // marginTop: 20,
    backgroundColor: "#f9f9f9",
    paddingBottom: 20,
    margin: 10,
    borderRadius: 10,
  },
  containerFlat2: {
    backgroundColor: "#f9f9f9",
    paddingBottom: 20,
    margin: 10,

    // marginBottom: 10,
  },
  title: {
    marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#3e1f3f",
    //color: "#eed101",
    //marginLeft: 0,
  },
  icontext: {
    // marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#3e1f3f",
    fontSize: 12,
    //color: "#eed101",
    //marginLeft: 0,
  },
  desc: {
    textAlign: "left",
    color: "#3e1f3f",
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 0,
    fontWeight: "bold",
    //color: "#eed101",
  },
  subContainer: {
    ...Platform.select({
      ios: {
        backgroundColor: "white",
        marginTop: 0,
        marginLeft: 10,
        borderRadius: 10,
        height: 160,
        width: 140,

        shadowColor: "#000",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
      },
      android: {
        backgroundColor: "white",
        marginTop: 0,
        marginLeft: 10,
        borderRadius: 10,
        height: 150,
        width: 125,

        shadowColor: "#000",
        shadowOffset: { width: -10, height: -44 },
        shadowOpacity: 0.4,
        shadowRadius: 23,
        elevation: 5,
      },
    }),
  },
  subContainerSale: {
    ...Platform.select({
      ios: {
        backgroundColor: "white",
        marginTop: 0,
        marginLeft: 10,
        borderRadius: 10,
        height: 160,
        width: 140,

        shadowColor: "#000",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
      },
      android: {
        backgroundColor: "white",
        marginTop: 0,
        marginLeft: 10,
        borderRadius: 10,
        height: 160,
        width: 125,

        shadowColor: "#000",
        shadowOffset: { width: -10, height: -44 },
        shadowOpacity: 0.4,
        shadowRadius: 23,
        elevation: 5,
      },
    }),
  },

  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "bold",
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
