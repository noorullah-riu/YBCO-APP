import { StyleSheet, Platform, Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  containerMain: {
    overflow: "hidden",
    backgroundColor: "#fff",
    height: deviceHeight,
  },
  underline: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
  },
  slide: {
    //margin: 10,
    //  flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scrol: {
    height: deviceHeight,
    marginRight: 10,
    marginLeft: 10,
  },
  Detail: {
    // margin: 10,
    //flex: 1,
    //flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  image1: {
    height: 250,
    width: deviceWidth,

    // borderRadius:10,
  },
  titlLink: {
    fontSize: 18,
    marginTop: 20,
    alignSelf: "center",
    marginRight: 20,
    // fontWeight: "bold",
    color: "#ff9b70",
    marginBottom: 20,
    //color: "#eed101",
  },

  titlebtn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  titleName: {
    marginTop: 10,
    marginBottom: 0,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0D0400",
    textAlign: "center",
    //color: "#eed101",
  },
  titles: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "#0D0400",
  },
  defbtn: {
    //  textAlign: "right",
    marginTop: 10,
    // marginRight: 20,
    //  fontSize: 18,
    //color: "#ff9b70",
  },
  def: {
    textAlign: "right",
    marginTop: 10,
    marginRight: 20,
    fontSize: 16,
    color: "#ff9b70",
  },
});
