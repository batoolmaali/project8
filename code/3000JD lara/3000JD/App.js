import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import About from './screens/About'
import Inbox from './screens/Inbox'
// import Profile from './screens/Profile'
// import Trips from './screens/Trips'


export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search-outline" color={tintColor} size={24} />
      )
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'TEAM',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-people-outline" color={tintColor} size={24} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'ABOUT',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-bulb-outline" color={tintColor} size={24} />
      )
    }
  },
  // Profile: {
  //   screen: Profile,
  //   navigationOptions: {
  //     tabBarLabel: 'CONTACT',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-location-sharp" color={tintColor} size={24} />
  //     )
  //   }
  // }
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
