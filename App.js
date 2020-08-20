
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends Component{
  render(){
    return (
      <View>
        <Text>ANJAY !</Text>
        
          <View style={{flexDirection:"row",width:"100%", backgroundColor:"orange", height:40}}>
            <Text style={{backgroundColor:"#0000FF",color:"white",flex:1, height:20}}>Lezar</Text>
            <Text style={{backgroundColor:"#03942a",color:"white",flex:1,textAlign:"center"}}>Mamzky</Text>
            <Text style={{backgroundColor:"#94036b",color:"white",flex:1}}>Joni</Text>
          </View>

          <View style={{flexDirection:"row",width:"100%", backgroundColor:"orange", height:30}}>

          <TouchableOpacity
          style={ddd.stylenyaButton}
            onPress={() => this.munculinPopup()}
          >
            <Text>Press me 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={ddd.stylenyaButton}
            onPress={() => this.nampilinPopup()}
          >
            <Text style={{color:"white"}}>Press me 1</Text>
          </TouchableOpacity>
          </View>
          
      </View>
    );
  }

  munculinPopup(){
    alert('Hello World')
  }
  nampilinPopup(){
    alert('Hello Grave')
  }
}


const ddd = StyleSheet.create({
  stylenyaButton:{
    margin:5,
    flex:1,
    backgroundColor:"blue"
  }
});

export default App;
