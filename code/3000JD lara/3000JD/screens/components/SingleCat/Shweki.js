import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Video1 from "../Explore/Video";
const { height, width } = Dimensions.get("window");

const shwekivideo = require('../../../assets/sabah-shwaiki.mp4');
const shwekihindi = require('../../../assets/hindi.mp4');

export default function Shweki({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
    <ScrollView scrollEventThrottle={16}>
    <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: "700" ,color:'#4c96d7' }}>
    Mohammed ALshweki
    </Text>
    <Text style={{ fontWeight: "100", marginTop: 10 ,color:'#4c96d7' }}>
           Team Leader Front End 
    </Text>

    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10 }}>
    صباحيات شويكي 
     </Text>
    <View  style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Video1 video={shwekivideo} />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
          عنــدي الكم خبرين
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
        source={require("../../../assets/maxresdefault.jpg")}
      />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
          الموضوع عند سعدي
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
        source={require("../../../assets/sadi.jpg")}
      />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
         صوت القطار 
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
        source={require("../../../assets/EndMeetingforAll.png")}
      />
    </View>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10 }}>
     يلا ارجئي ارجئي   
   </Text>
    <View>
    <Video1 video={shwekihindi} />
    </View>
    <View style={{ flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
    marginTop:5,
           }}>
         <Button 
          title="next Page"
          color="#4c96d7"
          onPress={() => navigation.navigate("Khadejah")}
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