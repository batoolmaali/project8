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

const salamehvideo = require('../../../assets/sabah.mp4');
const salamehnawrasvideo = require('../../../assets/nawras.mp4');
export default function Salameh({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <ScrollView scrollEventThrottle={16}>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" ,color:'#4c96d7' }}>
       Salameh Yasin
      </Text>
      <Text style={{ fontWeight: "100", marginTop: 10 ,color:'#4c96d7' }}>
             Team Leader Backend 
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
          source={require("../../../assets/template.png")}
        />
      </View>
      <View>
      <Video1 video={salamehvideo} />
      </View>
      <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
      <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
             ئــــي فقع الكود 
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
          source={require("../../../assets/qnbl_nwwy.png")}
        />
      </View>
      <View style={{ width: width - 40, height:170, marginTop: 20 , marginBottom:20}}>
      <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4c96d7' , marginBottom:10}}>
            شو رأيك احللك اياها ؟! 
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
          source={require("../../../assets/DQ8AW.png")}
        />
      </View>
      <View>
      <Video1 video={salamehnawrasvideo} />
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
            onPress={() => navigation.navigate("Alaa")}
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