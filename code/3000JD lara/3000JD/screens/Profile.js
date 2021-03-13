import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Profile extends Component {
    render() {
        return (
            <view style={styles.container}>
            <View >
                <Icon name="ios-business-outline" size={24}/>
                <text>
                    Jordan - Amman 
                </text>
            </View>
            <View>
            <Icon name="ios-call-outline" size={24}/>
            <text>
              077 777 7777 
            </text>
           </View>
           <View>
           <Icon name="ios-globe-outline" size={24}/>
           <text>
              WWW.3000Jd.com
           </text>
           </View>
           <View>
           <Icon name="ios-logo-twitter" size={24}/>
           <text>
             @3000jd
           </text>
           </View>
           <View>
           <Icon name="ios-logo-facebook" size={24}/>
           <text>
             3000 JD  
           </text>
           </View>
           <View>
           <Icon name="ios-logo-instagram" size={24}/>
           <text>
             3000 JD  
           </text>
           </View>
           <View>
           <Icon name="ios-logo-github" size={24}/>
           <text>
             3000 JD  
           </text>
           </View>
            </view>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'row',
        alignItems: 'center',
    }
});
                // <Icon name="ios-search-outline" color={tintColor} size={24} />