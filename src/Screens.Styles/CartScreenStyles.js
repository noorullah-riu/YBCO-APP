import {StyleSheet,Platform,} from "react-native";
import { Dimensions } from "react-native";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    containerMain: {
        justifyContent: "center",
        overflow: "hidden",
        //  paddingBottom: 5,
        backgroundColor: "#fff",
        marginTop: 20,
      },
      containerFlat: {
        backgroundColor: "#f9f9f9",
        margin: 10,
        borderRadius: 10,
        height:deviceHeight,
        paddingBottom: 30,
      },
      scroll: {
        marginBottom: 30,
      },
      imageLogo: {
        height: 60,
        width: 200,
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 15,
      },
      container: {
        paddingBottom: 5,
        flex: 1,
        marginTop: 30,
        marginBottom: 80,
      },
      imageLogo: {
        height: 60,
        width: 200,
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 15,
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
      price: {
        marginTop: 5,
        marginBottom: 5,
        alignContent: "flex-start",
        // color: "#3e1f3f",
        fontSize: 21,
        fontWeight: "bold",
        color: "#F2AE1B",
        marginLeft: 10,
      },
     
})