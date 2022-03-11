import React, { useContext, useEffect, useState } from "react";
//import EcomContext from "../../contextProvider/DataProvider";
import {
  Text,
  SafeAreaView,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import styles from "../Screens.Styles/ProfileDisplayNutriStyles";

import EcomContext from "../ContextProvider/DataProvider";
import axios from "axios";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

const Drawer1 = ({ navigation }) => {
  const pic =
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80";
  const { UserProfle } = useContext(EcomContext);

  /*   const {
  } = useContext(EcomContext);
 */
  const [image, setimage] = useState(null);
  const [uploading, setuploading] = useState(false);
  const [User_Pic, setUser_Pic] = useState();

  //#region Image Upload

  const FunGetProfileData = () => {
    axios
      .post("https://backoffice.ybco.net/api/profile.php", {
        user_name: UserProfle.user_name || "",
        password: UserProfle.password || "",
        get_profile: "get_profile",
      })
      .then((response) => {
        console.log(response.data.data.profile);
        //   setLoading(false);
        setFullName(response.data.data.profile.full_name);
        setuser_name(response.data.data.profile.user_name);
        setEmailLogin(response.data.data.profile.email);
        setPhone(response.data.data.profile.phone);
        setCountry(response.data.data.profile.country);

        //   alert("Succeess");
      })
      .catch((error) => {
        //   console.log(error.response.data.data);
        //   alert(error.response.data.data);
        //  alert("Error");
        //   setLoading(false);
      });
  };

  useEffect(() => {
    // action on update of movies
  }, []);

  return (
    <SafeAreaView style={styles.containerMain}>
      <View
        style={{ flex: 1.5, backgroundColor: "#1E2340", marginBottom: 200 }}
      >
        <TouchableOpacity
          style={{ alignItems: "flex-start", marginLeft: 20, marginTop: 10 }}
        >
          <Icon
            raised
            name="arrow-left"
            type="feather"
            color="#4076CB"
            size={20}
            onPress={() => navigation.navigate("Home")}
          />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontSize: 20, color: "#fff" }}>
          Profile
        </Text>

        <View
          style={{
            marginTop: 20,
            height: deviceHeight / 3.5,
            width: deviceWidth - 30,
            backgroundColor: "#fff",
            alignSelf: "center",
            alignItems:"center",
            justifyContent: 'center',
            borderRadius: 20,
         

            shadowColor: "#000",
            shadowOffset: { width: -2, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <Avatar
            rounded
            icon={{ name: "user", color: "#FFf", type: "font-awesome" }}
            size={110}
            activeOpacity={0.7}
            containerStyle={{
              alignSelf: "center",
              marginVertical: 20,
              borderWidth: 3,
              borderColor: "#21a9ff",
            }}
            // onPress={_pickImage}
            source={{
              //   uri: "https://randomuser.me/api/portraits/men/41.jpg",
              uri: pic,
            }}
          >
            {/* 
Dark: #1E2340
Light: #3E425F */}

            <Avatar.Accessory {...navigation} />
          </Avatar>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#aaa",
              fontWeight: "bold",
            }}
          >
            User Name
          </Text>
        </View>
      </View>

      <View style={{ flex: 2, backgroundColor: "#fff" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileEdit1")}
          style={{ flexDirection: "row", marginTop: 30 , marginTop: -40,justifyContent:"center",alignItems:"center"}}
        >
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Icon
              //   raised
              size={30}
              name="user"
              type="font-awesome"
              color="#21a9ff"
              //    onPress={() => NavigateStart()}
            />
          </View>
          <View style={{ flex: 3, marginRight: 20, alignItems: "flex-start" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#aaa" }}>
              Profile
            </Text>
          </View>
          <View style={{ flex: 2 }}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileEdit1")}
          style={{ flexDirection: "row", marginTop: 30 ,justifyContent:"center",alignItems:"center"}}
        >
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Icon
              //   raised
              size={30}
              name="globe"
              type="font-awesome"
              color="#21a9ff"
              //    onPress={() => NavigateStart()}
            />
          </View>
          <View style={{ flex: 3, marginRight: 20, alignItems: "flex-start" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#aaa" }}>
              Adress
            </Text>
          </View>
          <View style={{ flex: 2 }}></View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 30 ,justifyContent:"center",alignItems:"center"}}>
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Icon
              //   raised
              size={30}
              name="credit-card"
              type="font-awesome"
              color="#21a9ff"
              //    onPress={() => NavigateStart()}
            />
          </View>
          <View style={{ flex: 3, marginRight: 20, alignItems: "flex-start" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#aaa" }}>
              Payment Methods
            </Text>
          </View>
          <View style={{ flex: 2 }}></View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 30,justifyContent:"center",alignItems:"center" }}>
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Icon
              //   raised
              size={30}
              name="users"
              type="font-awesome"
              color="#21a9ff"
              //    onPress={() => NavigateStart()}
            />
          </View>
          <View style={{ flex: 3, marginRight: 20, alignItems: "flex-start" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#aaa" }}>
              Nominee
            </Text>
          </View>
          <View style={{ flex: 2 }}></View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", marginTop: 30 ,justifyContent:"center",alignItems:"center"}}>
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Icon
              //   raised
              size={30}
              name="power-off"
              type="font-awesome"
              color="#21a9ff"
              //    onPress={() => NavigateStart()}
            />
          </View>
          <View style={{ flex: 3, marginRight: 20, alignItems: "flex-start" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#aaa" }}>
              Log Out
            </Text>
          </View>
          <View style={{ flex: 2 }}></View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Drawer1;
