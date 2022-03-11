import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Icon } from "react-native-elements";
//import { Button } from "../UiKit/Button";
import EcomContext from "../ContextProvider/DataProvider";
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

const Login = ({ navigation }) => {
  const [IsFieldFocuous, setIsFieldFocuous] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const {
    EmailLogin,
    setEmailLogin,
    PasswordLogin,
    setPasswordLogin,
    FunLogin,
    Loading,
    setLoading,
    LoginSuccess,
  } = useContext(EcomContext);

  const {
    validate,
    isFieldInError,
    getErrorsInField,
    getErrorMessages,
    isFormValid,
  } = useValidation({
    state: { EmailLogin, PasswordLogin },
  });

  const _onPressButton = async () => {
  
    validate({
      EmailLogin: { required: true },
      PasswordLogin: { required: true, minlength: 8 },
    });

    const a = isFormValid();
     if (a) {
      setLoading(true);
      setIsFieldFocuous(true);
      FunLogin();
    }
  };

  useEffect(() => {
    // action on update of movies
    //alert("value chnge");
    if(LoginSuccess){ 
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
      } 
  }, [LoginSuccess]);
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ textAlign: "center", paddingVertical: 20 }}>
        Login Screen
      </Text>
      <View style={{ marginTop: 100 }}>
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
            marginTop: 0,
            fontSize: 14,
          }}
          //  onFocus={()=>setIsFieldFocuous(true)}
          value={EmailLogin}
          onChangeText={(EmailLogin) => setEmailLogin(EmailLogin)}
        />
        {isFieldInError("EmailLogin") &&
          getErrorsInField("EmailLogin").map((errorMessage) =>
            IsFieldFocuous === false ? (
              <Animatable.View animation="slideInRight">
                <Text
                  key={errorMessage}
                  style={{ color: "red", fontSize: 10, textAlign: "center" }}
                >
                  {errorMessage}
                </Text>
              </Animatable.View>
            ) : (
              <></>
            )
          )}

        <TextInput
          placeholder="Password..."
          inputContainerStyle={{
           // borderColor: "#707070",
           // borderRadius: 30,
          //  borderWidth: 0.5,

          }}
          style={{
            // padding: 5,
         //   backgroundColor:"white",
            marginRight:20,
            marginLeft: 20,
            marginTop: 10,
            fontSize: 14,
          }}
          secureTextEntry={passwordVisible}
          value={PasswordLogin}
          onChangeText={(PasswordLogin) => setPasswordLogin(PasswordLogin)}
          right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
        
      />
    
        {isFieldInError("PasswordLogin") &&
          getErrorsInField("PasswordLogin").map((errorMessage) =>
            IsFieldFocuous === false ? (
              <Animatable.View animation="slideInRight">
                <Text
                  key={errorMessage}
                  style={{ color: "red", fontSize: 10, textAlign: "center" }}
                >
                  {errorMessage}
                </Text>
              </Animatable.View>
            ) : (
              <></>
            )
          )}

        <View style={{ paddingTop: 20 }}></View>
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
          Login
        </Button>
        <Button
        //  loading={Loading}
          //  disabled={false}
          style={{
            backgroundColor: "#21a9ff",
            padding: 5,
            borderRadius: 30,
            marginLeft: 20,
            marginRight:20,
          }}
          //  icon="chevron-right"
          mode="contained"
          onPress={() => navigation.navigate("SignUp")}
          // onPress={() => navigation.navigate("MainAPp")}
        >
          SignUp
        </Button>
      </View>
      <TouchableOpacity
        style={{ marginTop: 20, alignItems: "flex-end", paddingRight: 20 }}
        onPress={() => navigation.navigate("ForgotPass")}
      >
        <Text style={{ color: "#21a9ff" }}>Forgot Password ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titlebtn: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#fff",
    //color: "#eed101",
  },
});

export default Login;
