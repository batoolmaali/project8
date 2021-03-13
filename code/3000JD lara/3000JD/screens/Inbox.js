import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
class Lara extends Component {
    render() {
        return (
          <View style={styles.container}>
          <View>
          <Text style={{ fontSize: 20, fontWeight: "700" ,color:'#4C96D7' ,paddingTop:25 ,paddingLeft:10 }}>
          About Us 
         </Text>
          <View >
          <Text style={{ fontWeight: "100" ,color:'#4C96D7' }}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Text>
          </View>
          </View>
          </View>
        );
    }
}
const Stack = createStackNavigator();
function Inbox() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inbox">
        <Stack.Screen name="About Us" component={Lara} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Inbox;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      textAlign:"justify",
      padding:10,
      backgroundColor:"#F0F8FF",
        // justifyContent: 'center'
    }
});