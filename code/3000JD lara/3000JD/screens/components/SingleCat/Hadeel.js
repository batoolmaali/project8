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

const hadeelvideo = require('../../../assets/hadeel.mp4');
export default function Hadeel({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <ScrollView scrollEventThrottle={16}>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" ,color:'#4c96d7' }}>
       Hadeel Alshahwan 
      </Text>
      <Text style={{ fontWeight: "100", marginTop: 10 ,color:'#4c96d7' }}>
             Jop Coatch 
      </Text>
      <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
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
          source={require("../../../assets/hadeelimg.jpg")}
        />
      </View>
      <View>
      <Video1 video={hadeelvideo}/>
      </View>
      <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
      <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
             Group Photo 
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
          source={require("../../../assets/group-photo.jpg")}
        />
      </View>
      <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
      <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
            Open Your Cam Please
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
          source={require("../../../assets/opencam.jpg")}
        />
      </View>
      <View style={{ flexDirection:'row',
      justifyContent:'space-between',
      width:'60%',
      marginTop:5,
      marginBottom:15,
             }}>
           <Button 
            title="next Page"
            color="#4c96d7"
            onPress={() => navigation.navigate("Salameh")}
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