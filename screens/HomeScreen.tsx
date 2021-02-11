import * as React from 'react';
import { StyleSheet,Text,View,Image,ScrollView } from 'react-native';
import AlbumSquare from '../components/Album/index'
import AlbumCategory from '../components/AlbumCategory/index';
const album={
  id:'1',
  imageUrl:'',
  artistNames:'ds'
}
{/*const albumCategoryobj:{
  id:'1',
  title:'Happy VIbes',
  albums:[
    {
      id:'1',
      imageUrl:'ds',
      artistNames:'ds',
    }
  ]
};*/}

export default function HomeScreen() {
  return ( 
    <ScrollView>
      <View style={styles.container}>
     <AlbumSquare album={album}/>
     <AlbumSquare album={album}/>
     <AlbumSquare album={album}/>
     <AlbumSquare album={album}/>



     {/*<AlbumCategory title={albumCategoryobj.title
     albums={albumCategoryobj.albums}/>*/}
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
    
  },
 
});
