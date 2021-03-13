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
import Video1 from "../Explore/Video";
const { height, width } = Dimensions.get("window");

const amalvideo = require('../../../assets/amal.mp4');
const amalGaz = require('../../../assets/gaz.mp4');


export default function Amal({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
    <ScrollView scrollEventThrottle={16}>
    <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: "700" ,color:'#4c96d7' }}>
       Amal Al-Dajah
    </Text>
    <Text style={{ fontWeight: "100", marginTop: 10 ,color:'#4c96d7' }}>
           Assestant Front End
    </Text>

    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10 }}>
        منورررة أمل 
     </Text>
    <View  style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Video1 video={amalvideo} />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>   
     لما تحاول تتفاهم مع برج الجوزاء 
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
        source={require("../../../assets/jwzaa.jpg")}
      />
    </View>
    <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
          تمام عزيـزتـي
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
        source={require("../../../assets/azezty.jpg")}
      />
    </View>
    <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10 }}>
     غااز غااز   
   </Text>
    <View>
    <Video1 video={amalGaz} />
    </View>
    <View style={{ flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
    marginTop:10,
    marginBottom:15,
           }}>
         <Button 
          title="next Page"
          color="#4c96d7"
          onPress={() => navigation.navigate("Home")}
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