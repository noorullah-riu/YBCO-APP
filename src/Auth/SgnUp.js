import React, { useContext, useEffect, useState } from "react";
import { View ,ScrollView,TouchableOpacity} from "react-native";
import { Input, Icon } from "react-native-elements";
import { useValidation } from "react-native-form-validator";
import * as Animatable from "react-native-animatable";
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
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [Loading, setLoading] = useState(false);
  const [ybcoid, setybcoid] = useState("");
  const [sponsor_name, setsponsor_name] = useState("");
  const [user_name, setuser_name] = useState("");
  const [full_name, setfull_name] = useState("");
  const [country, setcountry] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [IsFieldFocuous, setIsFieldFocuous] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const {
    validate,
    isFieldInError,
    getErrorsInField,
    getErrorMessages,
    isFormValid,
  } = useValidation({
    state: {
      ybcoid,
      sponsor_name,
      user_name,
      full_name,
      country,
      email,
      password,
    },
  });

  const _onPressButton = async () => {
    validate({
      ybcoid: { required: true },
      sponsor_name: { required: true },
      user_name: { required: true },
      full_name: { required: true },
      country: { required: true },
      email: { required: true },
      password: { required: true, minlength: 8 },
    });
  


    const a = isFormValid();
   // navigation.navigate("SignUp");
      if (a) {
      setLoading(true);
      FunSignUp();
   
    } 
  };

  const FunSignUp = () => {
    axios
      .post("https://backoffice.ybco.net/api/signup.php", {
        ybco_id: ybcoid,
        sponsor_name,
        user_name,
        full_name,
        country,
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        alert("Succeess");
      })
      .catch((error) => {
        //   console.log(error.response.data.data);
         alert(error.response.data.data);
      //  alert("Error");
        setLoading(false);
      });
  };

  return (
    <ScrollView style={{ marginTop: 0 }}>
      <Text style={{ textAlign: "center", paddingVertical: 40 }}>
        SignUp Screen
      </Text>
      <Text style={{ color: "#aaa", fontSize: 12,marginTop:-20,textAlign:"right",marginRight:20}}>
          If you do not have sponsor name,Use ybco as sponsor    
           </Text>
      <Input
        placeholder="sponsor_name..."
        inputContainerStyle={{
          borderColor: "#707070",
          borderRadius: 30,
          borderWidth: 0.5,
        }}
        style={{
          marginLeft: 15,
          marginTop: 0,
          fontSize: 14,
        }}
        //  onFocus={()=>setIsFieldFocuous(true)}
        value={sponsor_name}
        onChangeText={(sponsor_name) => setsponsor_name(sponsor_name)}
      />
      
          {isFieldInError("sponsor_name") &&
          getErrorsInField("sponsor_name").map((errorMessage) =>
            IsFieldFocuous === false ? (
              <Animatable.View animation="slideInRight">
                <Text
                  key={errorMessage}
                  style={{ color: "red", fontSize: 10, textAlign: "center" ,marginTop:-20}}
                >
                  {errorMessage}
                </Text>
              </Animatable.View>
            ) : (
              <></>
            )
          )}
      <Input
        placeholder="user_name..."
        inputContainerStyle={{
          borderColor: "#707070",
          borderRadius: 30,
          borderWidth: 0.5,
        }}
        style={{
          marginLeft: 15,
          marginTop: 0,
          fontSize: 14,
        }}
        //  onFocus={()=>setIsFieldFocuous(true)}
           value={user_name}
           onChangeText={(user_name) => setuser_name(user_name)}
      />
           {isFieldInError("user_name") &&
          getErrorsInField("user_name").map((errorMessage) =>
            IsFieldFocuous === false ? (
              <Animatable.View animation="slideInRight">
                <Text
                  key={errorMessage}
                  style={{ color: "red", fontSize: 10, textAlign: "center" ,marginTop:-20}}
                >
                  {errorMessage}
                </Text>
              </Animatable.View>
            ) : (
              <></>
            )
          )}
      
      <Input
        placeholder="full_name..."
        inputContainerStyle={{
          borderColor: "#707070",
          borderRadius: 30,
          borderWidth: 0.5,
        }}
        style={{
          marginLeft: 15,
          marginTop: 0,
          fontSize: 14,
        }}
        //  onFocus={()=>setIsFieldFocuous(true)}
           value={full_name}
           onChangeText={(full_name) => setfull_name(full_name)}
      />
          {isFieldInError("full_name") &&
          getErrorsInField("full_name").map((errorMessage) =>
            IsFieldFocuous === false ? (
              <Animatable.View animation="slideInRight">
                <Text
                  key={errorMessage}
                  style={{ color: "red", fontSize: 10, textAlign: "center" ,marginTop:-20}}
                >
                  {errorMessage}
                </Text>
              </Animatable.View>
            ) : (
              <></>
            )
          )}
      <Input
        placeholder="country..."
        inputContainerStyle={{
          borderColor: "#707070",
          borderRadius: 30,
          borderWidth: 0.5,
        }}
        style={{
          marginLeft: 15,
          marginTop: 0,
          fontSize: 14,
        }}
        //  onFocus={()=>setIsFieldFocuous(true)}
           value={country}
          onChangeText={(country) => setcountry(country)}
      />
       {isFieldInError("country") &&
          getErrorsInField("country").map((errorMessage) =>
            IsFieldFocuous === false ? (
              <Animatable.View animation="slideInRight">
                <Text
                  key={errorMessage}
                  style={{ color: "red", fontSize: 10, textAlign: "center" ,marginTop:-20}}
                >
                  {errorMessage}
                </Text>
              </Animatable.View>
            ) : (
              <></>
            )
          )}
      <Input
        placeholder="Email..."
        inputContainerStyle={{
          borderColor: "#707070",
          borderRadius: 30,
          borderWidth: 0.5,
        }}
        style={{
          marginLeft: 15,
          marginTop: 0,
          fontSize: 14,
        }}
        //  onFocus={()=>setIsFieldFocuous(true)}
           value={email}
           onChangeText={(email) => setemail(email)}
      />
         {isFieldInError("email") &&
          getErrorsInField("email").map((errorMessage) =>
            IsFieldFocuous === false ? (
              <Animatable.View animation="slideInRight">
                <Text
                  key={errorMessage}
                  style={{ color: "red", fontSize: 10, textAlign: "center" ,marginTop:-20}}
                >
                  {errorMessage}
                </Text>
              </Animatable.View>
            ) : (
              <></>
            )
          )}
      <Input
        placeholder="password..."
        inputContainerStyle={{
          borderColor: "#707070",
          borderRadius: 30,
          borderWidth: 0.5,
        }}
        style={{
          marginLeft: 15,
          marginTop: 0,
          fontSize: 14,
        }}
        //  onFocus={()=>setIsFieldFocuous(true)}
           value={password}
           onChangeText={(password) => setpassword(password)}
      />
          {isFieldInError("password") &&
          getErrorsInField("password").map((errorMessage) =>
            IsFieldFocuous === false ? (
              <Animatable.View animation="slideInRight">
                <Text
                  key={errorMessage}
                  style={{ color: "red", fontSize: 10, textAlign: "center" ,marginTop:-5}}
                >
                  {errorMessage}
                </Text>
              </Animatable.View>
            ) : (
              <></>
            )
          )}
      <Button
          loading={Loading}
          disabled={Loading}
        style={{
          backgroundColor: "#21a9ff",
          padding: 5,
          borderRadius: 30,
          marginLeft: 20,
          marginTop: 20,
          marginRight: 20,
        }}
        //  icon="chevron-right"
        mode="contained"
        onPress={() => _onPressButton()}
        // onPress={() => navigation.navigate("MainAPp")}
      >
        SignUp
      </Button>
      <TouchableOpacity
        style={{ marginTop: 20, alignItems: "flex-end", paddingRight: 20 }}
        onPress={() => navigation.navigate("ForgotPass")}
      >
        <Text style={{ color: "#21a9ff" }}>Already have account Login ?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default SignUp;
