import {StyleSheet,Platform,} from "react-native";

export default StyleSheet.create({
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
    })
  },
    containerFlat: {
        backgroundColor: "#f9f9f9",
        margin: 10,
        borderRadius: 10,
        // paddingBottom: 70,
      },
    
      containerMain: {
        justifyContent: "center",
        overflow: "hidden",
        //  paddingBottom: 5,
        backgroundColor: "#fff",
        marginTop: 20,
        paddingBottom: 25,
      },
      imageLogo: {
        height: 60,
        width: 200,
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 15,
      },
      Line: {
        backgroundColor: "gray",
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
      },
      /* 
      subContainer: {
        backgroundColor: "white",
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 0,
        borderRadius: 10,
        height: 200,
        width: 160,
        alignItems: "center",
    
        shadowColor: "#000",
        shadowOffset: { width: -10, height: -44 },
        shadowOpacity: 0.4,
        shadowRadius: 23,
        elevation: 5,
      }, */
    
      /* 
      text: {
        // textAlign: "right",
        textAlign: "left",
      },
      text2: {
        // textAlign: "right",
        textAlign: "right",
      }, */
     
})