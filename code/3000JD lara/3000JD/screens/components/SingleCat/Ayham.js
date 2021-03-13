import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");


export default function Ayham({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
    <ScrollView scrollEventThrottle={16}>
    <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: "700" ,color:'#4c96d7' }}>
     Ayham Zaid
    </Text>
    <Text style={{ fontWeight: "100", marginTop: 10 ,color:'#4c96d7' }}>
           Assestant Backend
    </Text>

    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
         تاسكات للبيع 
    </Text>
      <Image
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "cover",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#dddddd",
          
        }}
        source={require("../../../assets/Screenshot.jpg")}
      />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
       ياللي مش موجود يرفع ايدو 
    </Text>
      <Image
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "cover",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#dddddd",
          
        }}
        source={require("../../../assets/OIP.jpg")}
      />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
         صحصحو ي جماعة  
    </Text>
      <Image
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "cover",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#dddddd",
          
        }}
        source={require("../../../assets/aa.jpg")}
      />
      <Image
      style={{
        flex: 1,
        height: null,
        width: null,
        resizeMode: "cover",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#dddddd",
        
      }}
      source={require("../../../assets/yaq.jpg")}
    />
      <Image
      style={{
        flex: 1,
        height: null,
        width: null,
        resizeMode: "cover",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#dddddd",
        
      }}
      source={require("../../../assets/anas.jpg")}
    />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
      مبرووووك للعروسين 
    </Text>
      <Image
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "cover",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#dddddd",
          
        }}
        source={require("../../../assets/22222.jpg")}
      />
    </View>
    <View style={{ flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
    marginBottom:15,
           }}>
         <Button 
          title="next Page"
          color="#4c96d7"
          onPress={() => navigation.navigate("Shweki")}
            />
          </View>
    <View>
    </View>
  </View>
  </ScrollView>
      </View>
    </SafeAreaView>
  );
}