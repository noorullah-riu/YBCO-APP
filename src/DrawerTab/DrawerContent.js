import React ,{useContext}from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Headline,
  Subheading,
} from "react-native-paper";
import EcomContext from "../ContextProvider/DataProvider";
import { Icon, Divider } from "react-native-elements";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

export function DrawerContent(props) {
  const pic =
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80";

    const {
      EmailLogin,
      setEmailLogin,
      PasswordLogin,
      setPasswordLogin,
      FunLogin,
      Loading,
      setLoading,
      LoginSuccess,
      UserProfle,
    } = useContext(EcomContext);
   // console.log("OOOOOOOOO");
   // console.log(UserProfle);

  return (
    <View
      style={{
        flex: 1,
      //  borderRightColor: "#373845",
        borderRightWidth: 1,
        paddingTop: 10,
      }}
    >
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 10,
            paddingTop: 0,
            alignItems: "center",
          }}
        >
   {/*        <View style={{ flex: 1 }}>
                <Image
              source={{ uri: `https://backoffice.ybco.net/user-panel/assets/images/users/${UserProfle.profile_pic}` }}
           //  source={require("../Assets/Home/profile-user.png")} 
             style={{ width: 60, height: 60,borderRadius:30 }}
            /> 
          </View> */}
        {/*   <View style={{ flex: 2, marginLeft: 10 }}>
            <Title style={{ color: "#fff" }}>My Account</Title>
             <Caption style={{ color: "#7b7c89" }}>{UserProfle.email}</Caption> 
          </View> */}
          <View style={{ flex: 1, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert("Profile Function ")}>
              {/*     <Image
                style={{ height: 15, width: 15 }}
                source={require("../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
      {/*   <View
          style={{ borderColor: "#373845", borderWidth: 0.5, marginTop: 15 }}
        ></View> */}

        <View
          style={{
            flexDirection: "row",
            paddingTop: 50,
            paddingBottom: 10,
            alignItems: "center",
            // marginVertical: 20,
            //    borderColor: "white",
            //   borderWidth: 1,
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#21a9ff"
             // onPress={}
            />
          </View>
          <TouchableOpacity onPress={()=> props.navigation.navigate("Drawer1")} style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading style={{ marginRight: -10,fontSize:18,fontWeight:"bold",color:"#21a9ff" }}>
              Profile Settings 
            </Subheading>
          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "flex-end", flexDirection: "row" }}
          >
            <View style={{ flex: 1.5 }}></View>
            <View style={{ flex: 1 }}>
              <Caption
                style={{
                  color: "#21a9ff",
                  fontSize: 16,
                  marginRight: -10,
                }}
              >
                
              </Caption>
            </View>
          </View>
          <View style={{ flex: 0.1, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert(" Open Orders Function ")}>
              {/*      <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderColor: "#373845",
            borderWidth: 0.5,
            marginTop: 5,
            marginLeft: 45,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#21a9ff"
              onPress={() => alert("Profile Function ")}
            />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading style={{ color: "#fff", marginRight: -10 }}>
              All Histories
            </Subheading>
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-end" }}></View>
          <View style={{ flex: 0.5, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert("All Histories Function ")}>
              {/*      <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderColor: "#373845",
            borderWidth: 0.5,
            marginTop: 5,
            marginLeft: 45,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 0,
            paddingTop: 20,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#00c896"
              onPress={() => alert("Profile Function ")}
            />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading style={{ color: "#fff", marginRight: -10 }}>
              Referal Program
            </Subheading>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              //marginRight: 10,
              alignItems: "center",
              //    borderColor: "white",
              //  borderWidth: 1,
            }}
          >
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1 }}>
              <Caption
                style={{
                  color: "#00c896",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                25%
              </Caption>
            </View>
          </View>
          <View
            style={{
              flex: 0.1,
              alignItems: "flex-end",
              marginRight: 5,
              borderColor: "white",
              //   borderWidth: 1,
              // justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity onPress={() => alert("Referal Function ")}>
              {/*     <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderColor: "#373845",
            borderWidth: 0.5,
            marginTop: 5,
            marginLeft: 45,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#00c896"
              onPress={() => alert("Profile Function ")}
            />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading style={{ color: "#fff", marginRight: -10 }}>
              Invite Friends
            </Subheading>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}></View>
          <View style={{ flex: 0.1, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert("All Histories Function ")}>
              {/*       <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderColor: "#373845",
            borderWidth: 0.5,
            marginTop: 5,
            marginLeft: 45,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            // paddingLeft: 0,
            paddingTop: 20,
            paddingBottom: 10,
            alignItems: "center",

            //    borderColor: "white",
            //  borderWidth: 1,
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#00c896"
              onPress={() => alert("Profile Function ")}
            />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading style={{ color: "#fff", marginRight: -10 }}>
              Security
            </Subheading>
          </View>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Caption
              style={{
                color: "#fba91c",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Medium
            </Caption>
          </View>
          <View style={{ flex: 0.1, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert("Referal Function ")}>
              {/*      <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderColor: "#373845",
            borderWidth: 0.5,
            marginTop: 5,
            marginLeft: 45,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#00c896"
              onPress={() => alert("Profile Function ")}
            />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading style={{ color: "#fff", marginRight: -10 }}>
              Fees
            </Subheading>
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-end" }}></View>
          <View style={{ flex: 0.5, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert("All Histories Function ")}>
              {/*      <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderColor: "#373845",
            borderWidth: 0.5,
            marginTop: 5,
            marginLeft: 45,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#00c896"
              onPress={() => alert("Profile Function ")}
            />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading style={{ color: "#fff", marginRight: -10 }}>
              Settings
            </Subheading>
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-end" }}></View>
          <View style={{ flex: 0.5, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert("Settins Function ")}>
              {/*      <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderColor: "#373845",
            borderWidth: 0.5,
            marginTop: 5,
            marginLeft: 45,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#00c896"
              onPress={() => alert("Profile Function ")}
            />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading style={{ color: "#fff", marginRight: -10 }}>
              Support
            </Subheading>
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-end" }}></View>
          <View style={{ flex: 0.5, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert("All Histories Function ")}>
              {/*      <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderColor: "#373845",
            borderWidth: 0.5,
            marginTop: 5,
            marginLeft: 45,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#00c896"
              onPress={() => alert("Profile Function ")}
            />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading style={{ color: "#fff", marginRight: -10 }}>
              About
            </Subheading>
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-end" }}></View>
          <View style={{ flex: 0.5, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert("About Function ")}>
              {/*       <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderColor: "#373845",
            borderWidth: 0.5,
            marginTop: 5,
            marginLeft: 45,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 30,
            paddingBottom: 30,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, marginLeft: -10 }}>
            <Icon
              size={20}
              name="th"
              type="font-awesome"
              color="#00c896"
              onPress={() => alert("Profile Function ")}
            />
          </View>
          <View style={{ flex: 2, alignItems: "flex-start", marginLeft: -20 }}>
            <Subheading
              style={{ color: "#fff", marginRight: -10, fontWeight: "bold" }}
            >
              Log out
            </Subheading>
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-end" }}></View>
          <View style={{ flex: 0.5, alignItems: "flex-end", marginRight: 5 }}>
            <TouchableOpacity onPress={() => alert("All Histories Function ")}>
              {/*      <Image
                style={{ height: 15, width: 15 }}
                source={require("../../Assets/Home/nextg.png")}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section>
        <DrawerItem
          /*    icon={({}) => (
            <Icon
              size={16}
              // name="chevron-right"
              name="th"
              type="font-awesome"
              color="#00c896"
              onPress={() => navigation.navigate("DTrade")}
            />
          )} */

          label="Version 0.0.2"
          labelStyle={{ color: "#7a7ea3", alignSelf: "center" }}
          /*      onPress={() => {
            alert("Signout fun");
          }} */
        />
      </Drawer.Section>
    </View>
  );
}
