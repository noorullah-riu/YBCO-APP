import React,{useState,useContext,useEffect} from "react";
import { View,TouchableOpacity ,ScrollView} from "react-native";
import { Header } from "react-native-elements";
import { Icon, Avatar } from "react-native-elements";
import {
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    Headline,
    Subheading,
    TextInput,
    Button,
  } from "react-native-paper";
  import EcomContext from "../ContextProvider/DataProvider";
import axios from "axios";

const ProfileEdit = ({navigation}) => {
    const [FullName, setFullName] = useState("");
    const [user_name, setuser_name] = useState("");
    const [EmailLogin, setEmailLogin] = useState("");
    const [Phone, setPhone] = useState("");
    const [street, setstreet] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [Country, setCountry] = useState("");
    const [Loading, setLoading] = useState(false);
    const [PasswordVisible, setPasswordVisible] = useState(true);

    const {
        UserProfle
      } = useContext(EcomContext);

    const FunGetProfileData = () => {
        axios
          .post("https://backoffice.ybco.net/api/profile.php", {
            user_name: UserProfle.user_name || "",
            password: UserProfle.password || "",
            get_profile:"get_profile",
          })
          .then((response) => {
            console.log(response.data.data.profile);
         //   setLoading(false);
            setFullName(response.data.data.profile.full_name);
            setuser_name(response.data.data.profile.user_name);
            setEmailLogin(response.data.data.profile.email);
            setPhone(response.data.data.profile.phone)
            setCountry(response.data.data.profile.country)
            

            
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
        FunGetProfileData();
      }, []);
  return (
    <ScrollView style={{ marginTop: 0 }}>
        <TouchableOpacity style={{ alignItems: "flex-start",marginLeft:20,marginTop:30 }}>
        <Icon
            raised
            name="arrow-left"
            type="feather"
            color="#4076CB"
            size={20}
            onPress={() => navigation.navigate("Drawer1")}
          />
     </TouchableOpacity>

     <TextInput
          placeholder="Full Name..."
          inputContainerStyle={{
            borderColor: "#707070",
            borderRadius: 30,
            borderWidth: 0.5,
          }}
          style={{
            marginRight:20,
            marginLeft: 20,
            marginTop: 100,
            fontSize: 14,
          }}
          //  onFocus={()=>setIsFieldFocuous(true)}
          value={FullName}
          onChangeText={(FullName) => setFullName(FullName)}
        />
            <TextInput
          placeholder="User name..."
          inputContainerStyle={{
            borderColor: "#707070",
            borderRadius: 30,
            borderWidth: 0.5,
          }}
          style={{
            marginRight:20,
            marginLeft: 20,
            marginTop: 20,
            fontSize: 14,
          }}
          //  onFocus={()=>setIsFieldFocuous(true)}
          value={user_name}
          onChangeText={(user_name) => setuser_name(user_name)}
        />
            <TextInput
          placeholder="Email..."
          inputContainerStyle={{
            borderColor: "#707070",
            borderRadius: 30,
            borderWidth: 0.5,
          }}
          style={{
            marginRight:20,
            marginLeft: 20,
            marginTop: 20,
            fontSize: 14,
          }}
          //  onFocus={()=>setIsFieldFocuous(true)}
          value={EmailLogin}
          onChangeText={(EmailLogin) => setEmailLogin(EmailLogin)}
        />
              <TextInput
          placeholder="Phone..."
          inputContainerStyle={{
            borderColor: "#707070",
            borderRadius: 30,
            borderWidth: 0.5,
          }}
          style={{
            marginRight:20,
            marginLeft: 20,
            marginTop: 20,
            fontSize: 14,
          }}
          //  onFocus={()=>setIsFieldFocuous(true)}
          value={Phone}
          onChangeText={(Phone) => setPhone(Phone)}
        />
              <TextInput
          placeholder="street..."
          inputContainerStyle={{
            borderColor: "#707070",
            borderRadius: 30,
            borderWidth: 0.5,
          }}
          style={{
            marginRight:20,
            marginLeft: 20,
            marginTop: 20,
            fontSize: 14,
          }}
          //  onFocus={()=>setIsFieldFocuous(true)}
          value={street}
          onChangeText={(street) => setstreet(street)}
        />
            <TextInput
          placeholder="state..."
          inputContainerStyle={{
            borderColor: "#707070",
            borderRadius: 30,
            borderWidth: 0.5,
          }}
          style={{
            marginRight:20,
            marginLeft: 20,
            marginTop: 20,
            fontSize: 14,
          }}
          //  onFocus={()=>setIsFieldFocuous(true)}
          value={state}
          onChangeText={(state) => setstate(state)}
        />
     <TextInput
          placeholder="state..."
          inputContainerStyle={{
            borderColor: "#707070",
            borderRadius: 30,
            borderWidth: 0.5,
          }}
          style={{
            marginRight:20,
            marginLeft: 20,
            marginTop: 20,
            fontSize: 14,
          }}
          //  onFocus={()=>setIsFieldFocuous(true)}
          value={city}
          onChangeText={(city) => setcity(city)}
        />
<TextInput
          placeholder="Country..."
          inputContainerStyle={{
            borderColor: "#707070",
            borderRadius: 30,
            borderWidth: 0.5,
          }}
          style={{
            marginRight:20,
            marginLeft: 20,
            marginTop: 20,
            fontSize: 14,
          }}
          //  onFocus={()=>setIsFieldFocuous(true)}
          value={Country}
          onChangeText={(Country) => setCountry(Country)}
        />
          <View style={{margin:30}}></View>
       <Button
          loading={Loading}
          disabled={Loading}
          style={{
            backgroundColor: "#21a9ff",
            padding: 5,
            borderRadius: 30,
            margin: 20,
          }}
          //  icon="chevron-right"
          mode="contained"
          onPress={() => _onPressButton()}
          // onPress={() => navigation.navigate("MainAPp")}
        >
          Update
          
        </Button>
    </ScrollView>
  );
};
export default ProfileEdit;
