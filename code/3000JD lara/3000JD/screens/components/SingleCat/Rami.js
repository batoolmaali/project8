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
const { height, width } = Dimensions.get("window");

export default function Rami({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <ScrollView scrollEventThrottle={16}>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" ,color:'#4c96d7' }}>
       Rami Abu Al Samen 
      </Text>
      <Text style={{ fontWeight: "100", marginTop: 10 ,color:'#4c96d7' }}>
             Coding Academy Manager 
      </Text>
      <View style={{ width: width - 40, height: 370, marginTop: 20 }}>
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
          source={require("../../../assets/rami1.jpg")}
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
            onPress={() => navigation.navigate("Hadeel")}
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