import * as React from 'react';
import { View, StyleSheet, Button , Dimensions, } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const { height, width } = Dimensions.get("window");
export default function Video1(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const hadeelvideo = require('../../../assets/hadeel.mp4');
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={props.video}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    
  
  },
  video: {
    alignSelf: 'center',
    width: width - 40,
    height:170, 
  },
});