import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import {useRoute} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

 const Field = () => {
    const  route = useRoute()
   const  {date, url, title, explanation} = route.params.obj
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <ImageBackground
                style={styles.background}
                source={{uri: url}}
                resizeMode='cover'
                >
                <LinearGradient
                    colors={['rgba(0,0,0,01)', 'transparent']}
                    style={styles.gradient}
                    start={{x:0, y:1}}     
                    end={{x:0, y:.5}}         
                    locations={[0.0, 0.5]}                
                >
                    <Text style={styles.title} >{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.desc}>{explanation}</Text>

                </LinearGradient>
                </ImageBackground>
        </View>
    )
}

export default Field

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        ...StyleSheet.absoluteFillObject,
        flex:1
    },
    gradient:{
        flex:1,

    },
    title:{
        fontSize:30,
        marginTop:100,
        marginLeft:30,
        fontWeight:'bold',
        color:'#fff',
        maxWidth:500
    },
    date:{
        fontSize:20,
        margin:30,
        color:'#fff'
    },
    desc:{
        color:'#eee',
        fontSize:15,
        margin:30
    }
})

