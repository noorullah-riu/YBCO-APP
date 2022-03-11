import { StyleSheet, Platform, Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  containerFlat: {
    backgroundColor: "#FFFFFF",
    alignSelf: "baseline",
    // marginBottom: 10,
    width: deviceWidth - 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    //marginBottom: 10,
    // height: 300,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
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
  },
  LineBottomnull: {
    flexDirection: "row",
    // borderBottomColor: "gray",
    // borderBottomWidth: 1,
  },
  DataUser: {
    color: "#505050",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 10,
  },
  DataUserapi: {
    color: "#3e1f3f",
    fontSize: 18,
    fontWeight: "bold",
    // marginBottom: 5,
    marginLeft: 25,
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
        fontSize: 22,
      },
    }),
  },

  buttondropdown: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        //borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        marginBottom: 10,
        backgroundColor: "#ff9b70",
        padding: 10,
        //  borderRadius: 20,
      },
      android: {
        alignItems: "center",
        //borderWidth: 1,
        marginLeft: 20,
        marginBottom: 10,
        marginRight: 20,
        marginTop: 0,
        backgroundColor: "#ff9b70",
        padding: 5,
        //borderRadius: 20,
      },
    }),
  },
});
