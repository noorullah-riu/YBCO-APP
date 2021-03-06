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
    backgroundColor: "#FfFfFf",
    marginTop: 20, //this to use for bringing nav down
  },

  containerFlat: {
    backgroundColor: "#F9F9F9",
    marginBottom: 10,
    width: deviceWidth - 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 50,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  containerFlatdown: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: deviceWidth - 20,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  containerFlatdown2_1: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: deviceWidth -40,
    marginLeft: 10,
    marginRight: 10,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  containerFlatdown2: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: deviceWidth - 40,
    marginLeft: 10,
    marginRight: 10,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  containerFlat4: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: deviceWidth - 20,
    marginLeft: 10,
    marginRight: 0,
    borderRadius: 10,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  containerFlaterror: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: deviceWidth - 20,
    marginLeft: 10,
    marginRight: 0,
    borderRadius: 10,
    marginTop: 20,
    padding:20,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  containerFlattop: {
    backgroundColor: "#Fff",
    flexDirection: "row",
    marginTop: 10,
    width: deviceWidth - 20,
    marginLeft: 0,
    marginRight: 10,
    borderRadius: 5,
    marginBottom: 20,
    // alignSelf: "center",
  },

  containerFlatUser: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: deviceWidth - 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 2,

    // marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  containerFlatUserGoals: {
    backgroundColor: "#76767b",
    marginBottom: 5,
    width: deviceWidth - 20,
    marginLeft: 10,
    marginTop: 10,
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

  containerFlat2: {
    backgroundColor: "#f9f9f9",
    paddingBottom: 20,
    margin: 10,

    // marginBottom: 10,
  },
  title: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#0D0400",
    fontSize: 16,
    marginBottom: 5,
    //color: "#eed101",
    marginLeft: 20,
  },
  title2: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    marginTop: 20,
    color: "#FF9B70",
    fontSize: 18,
    fontWeight: "bold",
    //color: "#eed101",
    marginLeft: 20,
  },

  title3: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#FF9B70",
    fontSize: 18,
    fontWeight: "bold",
    //marginLeft: 20,
    //color: "#eed101",
  },
  title39: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#8de0b7",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    //color: "#eed101",
  },

  title4: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#4d4d4d",
    fontSize: 15,
    fontWeight: "bold",
    //color: "#eed101",
  },

  title41: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#4d4d4d",
    fontSize: 18,
    fontWeight: "bold",
    //color: "#eed101",
  },
  title6: {
    marginTop: 10,
    marginLeft: 20,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#4d4d4d",
    fontSize: 18,
    fontWeight: "bold",
    //color: "#eed101",
  },

  title5: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#7ac943",
    fontSize: 15,
    fontWeight: "bold",
    //color: "#eed101",
  },

  title3: {
    //  marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#FF9B70",
    fontSize: 18,
    fontWeight: "bold",
    //color: "#eed101",
  },
  titleUser: {
    marginTop: 10,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#0D0400",
    fontSize: 16,
    // marginBottom: 5,
    //color: "#eed101",
    marginLeft: 20,
  },
  titleUsert: {
    marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#fff",
    fontSize: 16,
    // marginBottom: 5,
    //color: "#eed101",
    marginLeft: 20,
  },

  titleUserD: {
    marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    color: "#FF9B70",
    fontSize: 16,
    // marginBottom: 5,
    //color: "#eed101",
    marginLeft: 20,
  },
  titleUserD2: {
    marginTop: 10,

    color: "#FFf",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },

  containerFlatdivs: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 20,
    margin: 10,
    borderRadius: 10,
    height: deviceHeight / 3.5,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  containerFlatdivsFree: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 20,
    margin: 10,
    borderRadius: 10,
    height: deviceHeight / 4,

    shadowColor: "#000",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  containerimage: {
    marginTop: -10,
    width: deviceWidth / 2.8,
    height: deviceHeight / 3.5,
    alignSelf: "center",
  },
  title2User: {
    marginTop: 5,
    //marginBottom: 5,
    //alignContent: "flex-start",
    //marginTop: 20,
    color: "#FF9B70",
    fontSize: 18,
    // fontWeight: "bold",
    //color: "#eed101",
    //marginLeft: 20,
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
  buttondropdown: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        //borderWidth: 1,
      //  marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        marginBottom: 10,
        backgroundColor: "#ff9b70",

        padding: 10,
        borderRadius: 10,
      },
      android: {
        alignItems: "center",
        //borderWidth: 1,
     //   marginLeft: 20,
        marginBottom: 10,
        marginRight: 20,
        marginTop: 0,
        borderRadius: 2,
        // borderBottomColor: "black",
        backgroundColor: "#ff9b70",
        padding: 10,
        borderRadius: 10,
      },
    }),
  },

  buttondropdownBorder: {
    ...Platform.select({
      ios: {
        alignItems: "center",
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 20,
        marginTop: 0,
        marginBottom: 10,
        //  backgroundColor: "#ff9b70",

       padding: 5,
    //    borderRadius: 10,
      },
      android: {
        alignItems: "center",
        borderWidth: 1,
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 20,
        marginTop: 0,
        borderRadius: 2,
        borderColor: "#ff9b70",
        //   borderBottomColor: "black",
        //   backgroundColor: "#ff9b70",
        padding: 5,
     //   borderRadius: 10,
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

  titlebtn: {
    fontSize: 15,
    // fontWeight: "bold",

    color: "#ff9b70",
    //color: "#eed101",
  },
  titlebtnw: {
    fontSize: 15,
    // fontWeight: "bold",
    color: "#fff",
    //color: "#eed101",
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
