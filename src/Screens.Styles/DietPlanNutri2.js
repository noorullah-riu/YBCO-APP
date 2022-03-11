import { StyleSheet, Platform, Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    overflow: "hidden",
    paddingBottom: 5,
    marginTop: 10,
    height: deviceHeight,
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
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: deviceWidth - 100,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  containerFlatInput: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: deviceWidth - 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  containerFlatmain: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: deviceWidth - 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 0,
    marginTop: 10,

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
  title2: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#0D0400",
    fontSize: 14,
    //marginBottom: 5,
    //color: "#eed101",
    // marginLeft: 20,
  },
  title: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    //  marginTop: 20,
    color: "#FF9B70",
    fontSize: 16,
    // fontWeight: "bold",
    //color: "#eed101",
    marginLeft: 20,
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
    //textAlign: "left",
    // marginTop: 20,
    color: "#3e1f3f",
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 0,

    //color: "#eed101",
  },
  desc2: {
    //textAlign: "left",
    // marginTop: 20,
    color: "#3e1f3f",
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    // fontWeight: "bold",
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
  defbtn: {
    // textAlign: "center",
    //fontSize: 14,
    // marginLeft: 30,
    //marginVertical: 30,
    // alignSelf: "center",
    //fontWeight: "bold",
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
