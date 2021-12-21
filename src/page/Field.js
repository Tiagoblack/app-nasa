import React, {useEffect, useState} from 'react';
import { Text, View, SafeAreaView, StyleSheet, ImageBackground, Animated } from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


 const Field = () => {
    const [transX] = useState(new Animated.Value(-100));
    const [opacity] = useState(new Animated.Value(0));
    const navigation = useNavigation();    
    const route = useRoute();
    const {date, url, title, explanation} = route.params.obj

    const handleGoBack = () =>{
        navigation.goBack()
    }

    useEffect(()=>{
        Animated.timing(transX,{
            toValue:0,
            duration:1000,
            useNativeDriver:true
        }).start();
        Animated.timing(opacity,{
            toValue:1,
            duration:1000,
            useNativeDriver:true
        }).start();
    },[])

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
                    <Ionicons 
                    style={styles.icon} 
                    name="md-arrow-back-circle-sharp" 
                    size={40} 
                    color="#fff"
                    onPress={handleGoBack}                    
                    />
                    <Animated.Text 
                        style={[{transform:[{translateX:transX}], opacity},styles.title]}>
                            {title}
                        </Animated.Text>
                    <Animated.Text 
                        style={[[{transform:[{translateX:transX}], opacity,},styles.date]]}>
                        {date}
                    </Animated.Text>
                    <Animated.Text 
                        numberOfLines={20} style={[{transform:[{translateX:transX}], opacity},styles.desc]}>
                        {explanation}
                    </Animated.Text>
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
    icon:{
        marginLeft:20,
        marginTop:30,

    },
    title:{
        fontSize:30,
        marginTop:30,
        marginLeft:20,
        fontWeight:'bold',
        color:'#fff',
        maxWidth:350,
        lineHeight: 1.4*30,
    },
    date:{
        fontSize:20,
        margin:30,
        marginLeft:20,
        color:'#fff',
    },
    desc:{
        color:'#eee',
        fontSize:15,
        marginLeft:20,
        lineHeight:1.4*15,
    }
})

