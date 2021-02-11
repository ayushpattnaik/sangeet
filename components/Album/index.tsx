import React from 'react';
import { Text, View,Image,StyleSheet,Dimensions } from 'react-native';
import {Album} from '../../types';
const wheight=Dimensions.get('window').height;
const wwidth=Dimensions.get('window').width;

export type AlbumProps={
  album:Album,
}

export default function AlbumSquare(props: AlbumProps){
    return (
      <View style={styles.container} >
    <Image source ={{uri: props.album.imageUrl}} style={styles.image}/>
    <Text style={styles.text}>{props.album.artistNames}</Text>
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
