import { StyleSheet, Platform, Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  containerMain: {
    justifyContent: "center",
    overflow: "hidden",
    //  paddingBottom: 5,
    backgroundColor: "#ffffff",
    flex: 1,
    // marginTop: 20,
  },

  scroll: {
    // marginBottom: 30,
  },
  imageUser: {
    height: 100,
    width: 100,
    marginBottom: 0,
    marginTop: 0,
    // flex: 1,

    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
    borderRadius: 400,
    borderWidth: 5,
    borderColor: "#ff9b70",
  },
  title: {
    marginTop: 5,
    marginBottom: 5,
    alignContent: "flex-start",
    color: "#3e1f3f",
    fontSize: 18,
    fontWeight: "bold",
    //color: "#eed101",
    marginLeft: 20,
  },
  title3: {
    marginTop: 15,
    marginBottom: 5,
    alignContent: "flex-start",
    color: "#3e1f3f",
    fontSize: 18,
    fontWeight: "bold",
    //color: "#eed101",
    marginLeft: 0,
  },
  title32: {
    marginTop: 15,
    marginBottom: 5,
    alignContent: "flex-start",
    color: "#3e1f3f",
    fontSize: 16,
  },
  title5: {
    marginBottom: 15,
    textAlign: "center",
    color: "#ff9b70",
    fontSize: 21,
    fontWeight: "bold",
    //color: "#eed101",
    marginLeft: 0,
  },

  title6: {
    marginBottom: 15,
    textAlign: "center",
    color: "#3e1f3f",
    fontSize: 16,
    fontWeight: "bold",
    //color: "#eed101",
    marginLeft: 0,
  },

  containerFlatUserGoals: {
    backgroundColor: "#fff",
    marginBottom: 5,
    width: deviceWidth - 20,
    marginLeft: 10,
    marginTop: 20,
    marginRight: 10,
    borderRadius: 5,
    // borderBottomColor: "gray",
    // borderBottomWidth: 2,

    // marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title2: {
    marginTop: 15,
    marginBottom: 5,
    alignContent: "flex-end",
    color: "#ff9b70",
    fontSize: 18,
    //fontWeight: "bold",
    //color: "#eed101",
    marginLeft: 40,
  },
  title89: {
    // marginTop: 15,
    //  marginBottom: 5,
    // alignContent: "flex-end",
    color: "black",
    fontSize: 18,
    //fontWeight: "bold",
    //color: "#eed101",
    //  marginLeft: 40,
  },
  titlebtn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",

    //color: "#eed101",
  },
});
