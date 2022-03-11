import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

import { EcomProvider } from "./src/ContextProvider/DataProvider";
//import EcomContext from "../contextProvider/DataProvider";


import Login from "./src/Auth/Login";
import SignUp from "./src/Auth/SgnUp";
import ForgotPass from "./src/Auth/ForgotPass";

//#region  Drawer Tab
import Home from "./src/Home";
import Home2 from "./src/Home2";
import Home3 from "./src/Home3";
import Home4 from "./src/Home5";

//#region DrawerTab Screens
import { DrawerContent } from "./src/DrawerTab/DrawerContent";

import Drawer1 from "./src/DrawerTab/Drawer1";
import Drawer2 from "./src/DrawerTab/Drawer2";
import ProfileEdit1 from "./src/DrawerTab/ProfileEdit1";
//#endregion

const Tab1 = createStackNavigator();
function LoginStack() {
  return (
      <Tab1.Navigator
        activeColor="#ffb514"
        inactiveColor="#8689af"
        barStyle={{ backgroundColor: "white", paddingTop: 5 }}
        shifting={false}
      //  labeled={true}
      >
        <Tab1.Screen
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Login"
          component={Login}
        />
        <Tab1.Screen
          options={{
            tabBarLabel: "SignUp",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                color={color}
                size={26}
              />
            ),
          }}
          name="SignUp"
          component={SignUp}
        />

        <Tab1.Screen
          options={{
            tabBarLabel: "ForgotPass",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                color={color}
                size={26}
              />
            ),
          }}
          name="ForgotPass"
          component={ForgotPass}
        />
      </Tab1.Navigator>
  );
} 

//#endregion
 const Tab3 = createStackNavigator();
function MyTabs() {
  return (
      <Tab3.Navigator
        activeColor="#ffb514"
        inactiveColor="#8689af"
       // barStyle={{ backgroundColor: "white", paddingTop: 5 }}
        shifting={false}

    //    labeled={true}
      >
          <Tab3.Screen
          options={{
            headerShown:false,
            tabBarLabel: "loginStack",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="loginStack"
          component={LoginStack}
        />
        <Tab3.Screen
          options={{
            headerShown:false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab3.Screen
          options={{
            headerShown:false,
            tabBarLabel: "Cart",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                color={color}
                size={26}
              />
            ),
          }}
          name="Cart"
          component={Home2}
        />
        <Tab3.Screen
          options={{
            headerShown:false,
            tabBarLabel: "favourite",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="heart-outline"
                color={color}
                size={26}
              />
            ),
          }}
          name="Fav"
          component={Home3}
        />
        <Tab3.Screen
          options={{
            headerShown:false,
            tabBarLabel: "My Account",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={26}
              />
            ),
          }}
          name="Account"
          component={Home4}
        />
      </Tab3.Navigator>
  );
} 

 const Drawer = createDrawerNavigator();
 function Apolo() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "#fff",
          //  width: 240,
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen    options={{
            headerShown:false}} name="Home" component={MyTabs} />
        <Drawer.Screen     options={{
            headerShown:false}}name="Drawer1" component={Drawer1} />
        <Drawer.Screen    options={{
            headerShown:false }}name="Drawer2" component={Drawer2} />
      <Drawer.Screen    options={{
            headerShown:false }}name="ProfileEdit1" component={ProfileEdit1} />
      </Drawer.Navigator>

      
    </NavigationContainer>
  );
}  


export default () => {
  return (
    <EcomProvider>
      <Apolo />
    </EcomProvider>
  );
};