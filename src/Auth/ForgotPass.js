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
import axios from "axios";
import Modal from "react-native-modal";

const ForgotPass = ({ navigation }) => {
  const [IsFieldFocuous, setIsFieldFocuous] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [EmailLogin, setEmailLogin] = useState("");
  const [Loading, setLoading] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const {
    validate,
    isFieldInError,
    getErrorsInField,
    getErrorMessages,
    isFormValid,
  } = useValidation({
    state: { EmailLogin },
  });

  const FunForgotPass = () => {axios.post("https://backoffice.ybco.net/api/otp_generator.php", {
        user_name: EmailLogin,
      })
      .then((response) => {
        console.log(response.data.data);
        setLoading(false);
        toggleModal();
      //  alert(response.data.data); 
    })
      .catch((error) => {
        //   console.log(error.response.data.data);
      //   alert(error.response.data.data);
      toggleModal();
      //  alert("Error");
        setLoading(false);
      });
  };



  const _onPressButton = async () => {
  
    validate({
      EmailLogin: { required: true },
    });

    const a = isFormValid();
     if (a) {
      setLoading(true);
      setIsFieldFocuous(true);
      FunForgotPass();
    }
  };

  useEffect(() => {
    // action on update of movies
    //alert("value chnge");
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
    

{/*     <Modal isVisible={isModalVisible}>
        <View style={{}}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>  */}

      <Text style={{ textAlign: "center", paddingVertical: 20 }}>
      Forgot Pass Screen
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
          Password reset
        </Button>

      </View>

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

export default ForgotPass;
