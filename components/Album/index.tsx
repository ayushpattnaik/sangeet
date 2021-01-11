import React from 'react';
import { Text, View,Image,StyleSheet,Dimensions } from 'react-native';
const wheight=Dimensions.get('window').height;
const wwidth=Dimensions.get('window').width;
export default function Album(props){
    return (
      <View style={styles.container} >
    <Image source ={{uri: props.imageUrl}} style={styles.image}/>
    <Text style={styles.text}>{props.text}</Text>
      </View>
    );
}
const styles=StyleSheet.create({
  container:{
    width:wwidth/2.6,
    borderWidth:2,
    borderColor:'white',
    alignItems:'center'

  },
  image:{
    height:wheight/5,
    width:'95%'
  },
  text:{
    color:'grey',
    marginTop:2
  }
})
