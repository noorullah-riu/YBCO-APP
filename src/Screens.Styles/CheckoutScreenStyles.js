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
      //  marginTop: 20,
        height:deviceHeight-100,
      },
      containerMain2: {
        //justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#fff",
        //  paddingBottom: 5,
        marginTop: 30,
        marginBottom: 30,
        marginRight: 10,
        //marginLeft: 10,
        borderRadius: 10,
      },
    
      containerMain3: {
        ...Platform.select({
          ios: {
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "#fff",
            marginTop: 20,
            paddingTop: 20,
            paddingBottom: 20,
            marginBottom: 20,
            marginRight: 10,
            marginLeft: 10,
            borderRadius: 10,
        
            shadowColor: "#000",
            shadowOffset: { width: -2, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
          },
          android: {
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "#fff",
            marginTop: 20,
            paddingTop: 20,
            paddingBottom: 20,
            marginBottom: 20,
            marginRight: 10,
            marginLeft: 10,
            borderRadius: 10,
        
            shadowColor: "#000",
            shadowOffset: { width: -10, height: -44 },
            shadowOpacity: 0.4,
            shadowRadius: 23,
            elevation: 5,
          },
        })
      },
      buttonTouch: {
        ...Platform.select({
          ios: {
            alignItems: "center",
            //borderWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            backgroundColor: "#F2AE1B",
            padding: 15,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 2, height: 5 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 2,
          },
          android: {
            alignItems: "center",
            //borderWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            backgroundColor: "#F2AE1B",
            padding: 10,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 10, height: 4 },
            shadowOpacity: 1.4,
            shadowRadius: 1,
            elevation: 2,
          },
        })
      },
      titlebtn: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        //color: "#eed101",
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
        marginLeft: 10,
        //textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#727c8e",
      },
      titles: {
        marginTop: 5,
        marginBottom: 5,
        //textAlign: "center",
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "#727c8e",
      },
      input: {
        borderBottomColor: "#000",
        borderBottomWidth: 0.5,
        margin: 20,
        fontSize: 15,
      },
     
})