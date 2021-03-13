import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("window");


export default function Alaa({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
    <ScrollView scrollEventThrottle={16}>
    <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: "700" ,color:'#4c96d7' }}>
       Alaa Mohammed
    </Text>
    <Text style={{ fontWeight: "100", marginTop: 10 ,color:'#4c96d7' }}>
           Expert Triner
    </Text>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>   
     فاضي نشرب قهوة برا الأكاديمية ؟
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
        source={require("../../../assets/cofee.jpg")}
      />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
          لما تكون الأم مبرمجة 
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
        source={require("../../../assets/mother.jpg")}
      />
    </View>
    <View style={{ width: width - 40, height:300, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
        Mute All  
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
        source={require("../../../assets/mute.jpg")}
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
          onPress={() => navigation.navigate("Ayham")}
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