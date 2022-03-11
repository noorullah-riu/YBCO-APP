import { StyleSheet, Platform, Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  buttondropdown: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        //borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 80,
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
  containerMain: {
    overflow: "hidden",
    backgroundColor: "#fff",
    // marginTop: 20,
    // height: deviceHeight + 100,
    flex: 1,
    // paddingBottom: 80,
  },
  titlebtn: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#fff",
    //color: "#eed101",
  },
  slide: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scrol: {
    height: deviceHeight,
    marginRight: 10,
    marginLeft: 10,
  },
  Detail: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  image1: {
    height: 250,
    width: deviceWidth,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#0D0400",
    textAlign: "center",
    //color: "#eed101",
  },

  titles: {
    marginTop: 20,
    marginBottom: 0,
    fontSize: 14,
    color: "#0D0400",
    marginLeft: 10,
  },
  defbtn: {
    //  textAlign: "right",
  },
  def: {
    textAlign: "right",
    marginTop: 20,
    marginRight: 30,
    fontSize: 16,
    color: "#ff9b70",
  },
});
