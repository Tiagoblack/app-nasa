import React, {useState} from 'react'
import { 
    StyleSheet, 
    Text,
    TouchableOpacity, 
    Image, 
    } from 'react-native'

export default function NasaApi({data, onPress}) {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}            
            >
            <Text
            numberOfLines={2} 
            style={styles.title}
            >{data.title}</Text>
            <Text style={styles.date}>{data.date}</Text>
            <Image
                resizeMode='cover'
                style={styles.image}
                source={{uri: data.url}}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,
        height:200,
        width:'100%' ,
        alignItems:'center',
    },
    container:{
       

    },
    date:{
        fontSize:15,
        marginVertical:10,
        color:'#fff'

    },
    title:{
    fontSize:20, 
    color:'#fff', 
    textAlign:'center', 
    maxWidth:300
    },
    image:{
        height:100,
        width:200,
        borderRadius:10
    },

})
