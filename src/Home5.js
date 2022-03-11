import React from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { Avatar, Icon } from "react-native-elements";

const Home5 = () => {
  return (
    <ScrollView style={{ marginTop: 0 }}>
      <View
        style={{
          backgroundColor: "#ffb514",
          height: 200,
          alignItems: "center",
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Avatar
            size="large"
            rounded
            source={{
              uri: "https://picsum.photos/200",
            }}
          />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Manish Chutaki
        </Text>
        <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
          ManishChutaki@gmail.com
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderBottomColor: "#999",
          borderBottomWidth: 0.2,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Icon name="shopping-bag" type="feather" color="#ffb514" size={25} />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              color: "#777",
              marginLeft: -10,
            }}
          >
            My Orders
          </Text>
        </View>

        <View style={{ flex: 2 }}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderBottomColor: "#999",
          borderBottomWidth: 0.2,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Icon name="heart" type="feather" color="#ffb514" size={25} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, color: "#777", marginLeft: -10 }}>
            Favourites
          </Text>
        </View>

        <View style={{ flex: 2 }}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderBottomColor: "#999",
          borderBottomWidth: 0.2,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Icon name="settings" type="feather" color="#ffb514" size={25} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, color: "#777", marginLeft: -10 }}>
            Settings
          </Text>
        </View>

        <View style={{ flex: 2 }}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderBottomColor: "#999",
          borderBottomWidth: 0.2,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Icon name="shopping-cart" type="feather" color="#ffb514" size={25} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, color: "#777", marginLeft: -10 }}>
            My Cart
          </Text>
        </View>

        <View style={{ flex: 2 }}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderBottomColor: "#999",
          borderBottomWidth: 0.2,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Icon name="star" type="feather" color="#ffb514" size={25} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, color: "#777", marginLeft: -10 }}>
            Rate Us
          </Text>
        </View>

        <View style={{ flex: 2 }}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderBottomColor: "#999",
          borderBottomWidth: 0.2,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Icon name="share-2" type="feather" color="#ffb514" size={25} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, color: "#777", marginLeft: -10 }}>
            Refer
          </Text>
        </View>

        <View style={{ flex: 2 }}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderBottomColor: "#999",
          borderBottomWidth: 0.2,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Icon name="log-out" type="feather" color="#ffb514" size={25} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, color: "#777", marginLeft: -10 }}>
            Log Out
          </Text>
        </View>

        <View style={{ flex: 2 }}></View>
      </View>
    </ScrollView>
  );
};
export default Home5;
