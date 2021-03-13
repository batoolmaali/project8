import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' , backgroundColor:"#F0F8FF"}}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View> */}
                <Button 
                    title={this.props.name}
                    color="#4c96d7"
                    onPress={this.props.click}
                  />
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});