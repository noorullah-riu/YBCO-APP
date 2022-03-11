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

  LineBottom: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 5,
  },
  LineBottomnull: {
    flexDirection: "row",
    // borderBottomColor: "gray",
    // borderBottomWidth: 1,
  },
  DataUserapi: {
    color: "#505050",
    fontSize: 16,
    // fontWeight: "bold",
    // marginBottom: 5,
    paddingTop: 10,
    marginLeft: 25,
  },
  DataUser: {
    color: "#ff9b70",
    fontSize: 18,
    // fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },

  titlebtn: {
    fontSize: 18,
    // fontWeight: "bold",
    color: "#fff",
    //color: "#eed101",
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
    //flexWrap: "wrap",
  },
  desc2: {
    //textAlign: "left",
    // marginTop: 20,
    // flexWrap: "wrap",
    color: "#3e1f3f",
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 0,
    // fontWeight: "bold",
    //color: "#eed101",
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
  containerFlat: {
    backgroundColor: "#FFF",
    alignSelf: "baseline",
    // marginBottom: 10,
    width: deviceWidth - 50,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    //marginBottom: 10,
    // height: 300,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  containerFlat2: {
    backgroundColor: "#FFf",
    alignSelf: "baseline",
    // marginBottom: 10,
    width: deviceWidth - 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 0,
    paddingBottom: 10,
    // height: 300,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
