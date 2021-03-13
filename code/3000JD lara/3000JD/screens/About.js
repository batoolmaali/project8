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
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const { height, width } = Dimensions.get("window");
function Team ({ navigation }) {
    return (
      
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <ScrollView scrollEventThrottle={16}>
                <View style={{ flex: 1,backgroundColor:"#F0F8FF", paddingTop: 20 }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "700",
                      paddingHorizontal: 20,
                      color:'#4c96d7',
                      textAlign:"center",
                    }}
                  >
                    Our Team 
                  </Text>
                  <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <View style={{ width: width - 40, height: 200, marginTop:5}}>
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
                        source={require("../assets/Lara.jpg")}
                      />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: "700",color:'#4c96d7', textAlign:"center" ,}}>
                    Lara Mahfouz
                  </Text>
                  </View>
                  <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                    <View style={{ width: width - 40, height: 200, marginTop:5}}>
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
                        source={require("../assets/Batool.jpg")}
                      />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: "700",color:'#4c96d7', textAlign:"center" ,}}>
                    Batool Maali
                  </Text>
                  </View>
                  <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                  <View style={{ width: width - 40, height: 200, marginTop:5}}>
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
                      source={require("../assets/Tala.jpg")}
                    />
                  </View>
                  <Text style={{ fontSize: 15, fontWeight: "700",color:'#4c96d7', textAlign:"center" ,}}>
                  Tala Mohammed
                </Text>
                </View>
                <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <View style={{ width: width - 40, height: 200, marginTop:5}}>
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
                    source={require("../assets/Aya.jpg")}
                  />
                </View>
                <Text style={{ fontSize: 15, fontWeight: "700",color:'#4c96d7', textAlign:"center" ,}}>
                Aya Khawaleh
              </Text>
              </View>  
              <View style={{ marginTop: 40, paddingHorizontal: 20 ,marginBottom:20}}>
              <View style={{ width: width - 40, height: 200, marginTop:5}}>
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
                  source={require("../assets/58.jpg")}
                />
              </View>
              <Text style={{ fontSize: 15, fontWeight: "700",color:'#4c96d7', textAlign:"center" ,}}>
              Mohammed Alashram 
            </Text>
            </View>
                </View>
              </ScrollView>
              
            </View>
          </SafeAreaView>
        );   
      }
      const Stack = createStackNavigator();

      function About() {
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="About">
              <Stack.Screen name="Our Team" component={Team} />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }

      export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
 