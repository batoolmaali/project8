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
const abl3 = require('../../../assets/ebla3.mp4');


export default function Khadejah({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
    <ScrollView scrollEventThrottle={16}>
    <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: "700" ,color:'#4c96d7' }}>
     Khadejah Hamdan 
    </Text>
    <Text style={{ fontWeight: "100", marginTop: 10 ,color:'#4c96d7' }}>
           Expert Trainer
    </Text>

    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
         GG
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
        source={require("../../../assets/GGG.jpg")}
      />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
    لما تحاول تفهم برج الجوزاء  
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
        source={require("../../../assets/75588aa1-6aef-46d6-8f2f-936e826c483a.jpg")}
      />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
        مالنااا ي خوان ؟؟؟؟؟  
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
        source={require("../../../assets/MALNA2.jpg")}
      />
    </View>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
    ابلع بروجيكت      </Text>
    <View>
    <Video1 video={abl3} />
    </View>
    <View style={{ flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
    marginBottom:15,
           }}>
         <Button 
          title="next Page"
          color="#4c96d7"
          onPress={() => navigation.navigate("Amal")}
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