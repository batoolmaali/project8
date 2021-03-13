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
import Category from "./components/Explore/Category";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Rami from "./components/SingleCat/Rami";
import Hadeel from "./components/SingleCat/Hadeel";
import Salameh from "./components/SingleCat/Salameh";
import Shweki from "./components/SingleCat/Shweki";
import Ayham from "./components/SingleCat/Ayham";
import Khadejah from "./components/SingleCat/Khadejah";
import Amal from "./components/SingleCat/Amal";
import Alaa from "./components/SingleCat/Ala";
const { height, width } = Dimensions.get("window");

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#F0F8FF",
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "#F0F8FF",
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS == "android" ? 10 : null,
              marginBottom: Platform.OS == "android" ? 10 : null,
            }}
          >
            <Icon name="ios-search" size={20} style={{ marginRight: 10}} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="What are you looking for ?"
              placeholderTextColor="grey"
              style={{ flex: 1, fontWeight: "700", backgroundColor: "#F0F8FF" }}
            />
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1,backgroundColor:"#F0F8FF", paddingTop: 20 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                paddingHorizontal: 20,
                color:'#4c96d7',
              }}
            >
              Trainers Category
            </Text>

            <View style={{ height: 130, marginTop: 20,}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category
                  imageUri={require("../assets/ramiii.jpg")}
                  name="Rami"
                  click={() => navigation.navigate("Rami")}
                />
                <Category
                  imageUri={require("../assets/hadeel.jpg")}
                  name="Hadeel"
                  click={() => navigation.navigate("Hadeel")}
                />
                <Category
                  imageUri={require("../assets/salameh.jpg")}
                  name="Salameh"
                  click={() => navigation.navigate("Salameh")}
                />
                <Category
                  imageUri={require("../assets/ala.jpg")}
                  name="Ala'"
                  click={() => navigation.navigate("Alaa")}
                />
            
                <Category
                  imageUri={require("../assets/ayham.jpg")}
                  name="Ayham"
                  click={() => navigation.navigate("Ayham")}
                />
                <Category
                  imageUri={require("../assets/shweki5.jpg")}
                  name="Shweki'"
                  click={() => navigation.navigate("Shweki")}
                />
                <Category
                  imageUri={require("../assets/khadeja.jpg")}
                  name="Khadejah'"
                  click={() => navigation.navigate("Khadejah")}
                />
                <Category
                  imageUri={require("../assets/amal.jpg")}
                  name="Amal"
                  click={() => navigation.navigate("Amal")}
                />
              
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" ,color:'#4c96d7'}}>
                Happy Fun Time
              </Text>
              <Text style={{ fontWeight: "100", marginTop: 10  ,color:'#4c96d7'}}>
                A Class  Fun Time  with all student and  Trainers
              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
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
                  source={require("../assets/student.png")}
                />
              </View>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700",color:'#4c96d7' }}>
                Happy New Year 
              </Text>
              <Text style={{ fontWeight: "100", marginTop: 10 ,color:'#4c96d7'}}>
                Happy New Year 2021 with Project Four 
              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 , marginBottom:15}}>
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
                  source={require("../assets/student2.png")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
<Rami />, 
<Hadeel />,
<Salameh />,
<Shweki />,
<Ayham />,
<Khadejah />,
<Amal />,
<Alaa />

const Stack = createStackNavigator();

function Explore() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Rami" component={Rami} />
        <Stack.Screen name="Ayham" component={Ayham} />
        <Stack.Screen name="Hadeel" component={Hadeel} />
        <Stack.Screen name="Salameh" component={Salameh} />
        <Stack.Screen name="Shweki" component={Shweki} />
        <Stack.Screen name="Khadejah" component={Khadejah} />
        <Stack.Screen name="Amal" component={Amal} />
        <Stack.Screen name="Alaa" component={Alaa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
