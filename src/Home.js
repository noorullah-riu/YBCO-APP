import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Avatar, Icon, SearchBar } from "react-native-elements";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
const Home4 = ({navigation}) => {
  const datadummy = [
    {
      id: "0",
      imgId: "xyz897",
      imgTitle: "Referal Fee Upto 70%",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
    },
    {
      id: "1",
      imgId: "xyz898",
      imgTitle: "DTEP Staking Is Live",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_61589353557market1.jpg",
    },
    {
      id: "2",
      imgId: "xyz899",
      imgTitle: "DTrade Is Now Live",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
    },
    {
      id: "3",
      imgId: "xyz900",
      imgTitle: "Buy With Credit Card",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_61589353557market1.jpg",
    },
    {
      id: "4",
      imgId: "xyz901",
      imgTitle: "Listing Mainia Countinus",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
    },
  ];

  const datadummy2 = [
    {
      id: "0",
      imgId: "xyz897",
      price: "200",
      imgTitle: "Women T-Shirt",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
    },
    {
      id: "1",
      imgId: "xyz898",
      price: "300",
      imgTitle: "Men T-Shirt",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_61589353557market1.jpg",
    },
    {
      id: "2",
      imgId: "xyz899",
      price: "400",
      imgTitle: "Men T-Shirt 2",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
    },
    {
      id: "3",
      imgId: "xyz900",
      price: "500",
      imgTitle: "Men T-Shirt 3",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_61589353557market1.jpg",
    },
    {
      id: "4",
      imgId: "xyz901",
      price: "600",
      imgTitle: "Men T-Shirt 4",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
    },
  ];
  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 0 }}>
        <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ flex: 4, alignItems: "flex-start" }}>
        <Icon
            raised
            name="align-left"
            type="feather"
            color="#4076CB"
            size={20}
      //      onPress={() => navigation.openDrawer()}
          />
          </TouchableOpacity>
       
       {/*    <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon name="smartphone" type="feather" color="#555" size={25} />
          </View> */}
       {/*    <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon name="filter" type="feather" color="#555" size={25} />
          </View> */}
        </View>

     {/*    <SearchBar
          placeholder="Search Your Product..."
          inputContainerStyle={{
            backgroundColor: "#FFF",
            //  padding: 10,
            fontWeight: "bold",
            borderBottomColor: "#008080",
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: -2, height: 5 },
            shadowOpacity: 0.1,
            shadowRadius: 0,
            elevation: 2,
          }}
          containerStyle={{
            backgroundColor: "#F2F2F2",
          }}
          platform="ios"
        /> */}
   {/*      <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 20,
            alignItems: "baseline",
          }}
        >
          <View style={{ flex: 4 }}>
            <Text style={{ fontSize: 22, color: "#ffb514" }}>Categories</Text>
          </View>

          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={{ fontSize: 14, color: "#555" }}>See All</Text>
          </View>
        </View> */}
      </View>
  {/*     <View style={{ paddingLeft: 20 }}>
        <FlatList
          horizontal={true}
          data={datadummy}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(datadummy) => datadummy.imgId}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: 80,
                      width: deviceWidth / 2.4,
                      borderRadius: 5,
                    }}
                    resizeMode="cover"
                    source={{ uri: item.imgURL }}
                  />
                </View>
              </View>
            );
          }}
        />
      </View> */}

   {/*    <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 20,
          alignItems: "baseline",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <View style={{ flex: 4 }}>
          <Text style={{ fontSize: 22, color: "#ffb514" }}>Featured</Text>
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={{ fontSize: 14, color: "#555" }}>See All</Text>
        </View>
      </View> */}

     {/*  <View style={{ paddingLeft: 20 }}>
        <FlatList
          horizontal={true}
          data={datadummy2}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(datadummy) => datadummy.imgId}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: 250,
                      width: deviceWidth / 1.8,
                      borderRadius: 5,
                      //overflow: "visible",
                    }}
                    resizeMode="cover"
                    source={{ uri: item.imgURL }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#333",
                      marginLeft: 5,
                      marginTop: 10,
                    }}
                  >
                    ${item.price}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#333",
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    {item.imgTitle}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View> */}

  {/*     <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 20,
          alignItems: "baseline",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <View style={{ flex: 4 }}>
          <Text style={{ fontSize: 22, color: "#ffb514" }}>Brand</Text>
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={{ fontSize: 14, color: "#555" }}>See All</Text>
        </View>
      </View> */}

     {/*  <View style={{ paddingLeft: 20 }}>
        <FlatList
          horizontal={true}
          data={datadummy2}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(datadummy) => datadummy.imgId}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: 250,
                      width: deviceWidth / 1.8,
                      borderRadius: 5,
                    }}
                    resizeMode="cover"
                    source={{ uri: item.imgURL }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#333",
                      marginLeft: 5,
                      marginTop: 10,
                    }}
                  >
                    ${item.price}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#333",
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    {item.imgTitle}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View> */}
    </ScrollView>
  );
};
export default Home4;
