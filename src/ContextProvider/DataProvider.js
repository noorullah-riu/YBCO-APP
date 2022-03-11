import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import * as Notifications from "expo-notifications";
//#region something

//const EcomContext = React.createContext();
const _0x2937 = [
  "228qGwqcK",
  "2034732ePRSjq",
  "234NFTYea",
  "152hPDTFC",
  "createContext",
  "1711DMvwJo",
  "4101LWyZTB",
  "373MHoqfG",
  "313884Xxdabe",
  "625132FNhWeO",
  "41670vtuiRw",
];
const _0x2acd = function (_0x1bb1c1, _0x3914ba) {
  _0x1bb1c1 = _0x1bb1c1 - 0xdc;
  let _0x29378b = _0x2937[_0x1bb1c1];
  return _0x29378b;
};
const _0x1ef3f6 = _0x2acd;
(function (_0x13b69c, _0x4189d0) {
  const _0x533e89 = _0x2acd;
  while (!![]) {
    try {
      const _0x1b9c84 =
        -parseInt(_0x533e89(0xe4)) +
        -parseInt(_0x533e89(0xe0)) * parseInt(_0x533e89(0xe2)) +
        -parseInt(_0x533e89(0xe6)) * parseInt(_0x533e89(0xdd)) +
        -parseInt(_0x533e89(0xe5)) +
        -parseInt(_0x533e89(0xe1)) * parseInt(_0x533e89(0xde)) +
        parseInt(_0x533e89(0xe3)) +
        parseInt(_0x533e89(0xdc));
      if (_0x1b9c84 === _0x4189d0) break;
      else _0x13b69c["push"](_0x13b69c["shift"]());
    } catch (_0x5d36e9) {
      _0x13b69c["push"](_0x13b69c["shift"]());
    }
  }
})(_0x2937, 0x5993b);
const EcomContext = React[_0x1ef3f6(0xdf)]();

//#endregion

export const EcomProvider = ({ children }) => {
  const [EmailLogin, setEmailLogin] = useState("Noor");
  const [PasswordLogin, setPasswordLogin] = useState("Abcd@123");
  const [Loading, setLoading] = useState(false);
  const [LoginSuccess, setLoginSuccess] = useState(false);
  const [UserProfle, setUserProfle] = useState({});

  const FunLogin = () => {
     axios.post("https://backoffice.ybco.net/api/login.php", {
      password: PasswordLogin,
      user_name: EmailLogin,
      })
      .then((response) => {
        console.log(response.data);
        setUserProfle(response.data.user_data)
        setLoading(false);
        setLoginSuccess(true);
      //  alert("Succeess");
      })
      .catch((error) => {
     //   console.log(error.response.data.data);
      alert(error.response.data.data);  
      setLoading(false);
    }); 
   
  };


  useEffect(() => {}, []);

  return (
    <EcomContext.Provider
      value={{
        //#region Login
        LoginSuccess,
        FunLogin,
        EmailLogin,
        setEmailLogin,
        PasswordLogin,
        setPasswordLogin,
        Loading, setLoading,
        UserProfle,
        //#endregion
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

export default EcomContext;
