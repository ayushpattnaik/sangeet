import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Album} from '../../types';


export type AlbumCategoryProps={
    title:string,
    albums: [Album],
}

 export default function AlbumCategory(props: AlbumCategoryProps){
     return(
        <View>
            <Text style={{}}>{props.title}</Text>
        </View>

     );
     }