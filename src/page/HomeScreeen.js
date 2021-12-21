import React, { useState, useEffect, useRef}from 'react'
import {useNavigation} from '@react-navigation/native'
import { 
    View, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet,
    ActivityIndicator,
    Animated,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

//import Header from '../components/Header';
import  NasaApi from  '../components/NasaApi';
import Api from '../api';



const HomeScreeen = () => {
    const [filterList, setFilterList] = useState([])
    const scrollY = useRef(new Animated.Value(0)).current
    const [req, setReq] = useState([])
    const [loading, setLoading] = useState(true)
    const [inputText, setInputText] = useState('')
    useEffect(()=>{
        const Nasa = async()=>{
            setLoading(true)
            let res = await Api.getData();
            setReq(res)
            setLoading(false)
        }
        Nasa()
    },[]);
    const navigation = useNavigation();
    const handleClickNasa = (obj)=>{
        console.log(obj)
        navigation.navigate('Field', {obj})
    }

    useEffect(()=>{
        if(inputText === ''){
            setFilterList(req)
        }else{
           setFilterList(
            req.filter(item=>{
                if(item.title.indexOf(inputText) > -1){
                    return true
                }else{
                    return false
                }
            })
           )
        }
    },[inputText])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#000" />
        <Animated.View style={[styles.header, {height: scrollY.interpolate({
            inputRange:[0, 100],
            outputRange:[250, 100],
            extrapolate:'clamp'
        })}]}>
            <Animated.Image
                source={require('../screen/logo.png')}
                style={[{height:100, width: 150 }, {opacity:scrollY.interpolate({
                    inputRange:[0, 100],
                    outputRange:[1, 0],
                    extrapolate:'clamp'
                })}]}
            />
            <Animated.View
                style={[styles.input, {transform:[{translateY:scrollY.interpolate({
                    inputRange:[0, 100],
                    outputRange:[0, -50],
                    extrapolate:'clamp'
                })}]}]}
            >
                <TextInput
                    value={inputText}
                    onChangeText={t=>setInputText(t)}
                    style={{flex:1, color:'#fff' }}
                    placeholderTextColor="#fff"
                    placeholder='Digite alguma coisa'
                / >
            </Animated.View>
        </Animated.View>
            { loading  ?<ActivityIndicator style={{marginTop:'70%'}} size={34} color="#fff"/>:
            <Animated.ScrollView
                contentContainerStyle={{paddingTop:250}}
                style={styles.scrollList}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: {
                         contentOffset: {
                           y: scrollY
                         }
                       }
                     }],
                     {useNativeDriver:false}
                  )} 
            >
                {filterList.map((item, index, array)=> <NasaApi 
                    data={item} 
                    index={index} 
                    key={index}
                    onPress={()=>handleClickNasa(array[index])}
                />)}
            </Animated.ScrollView>
            }
        </SafeAreaView>
    )
}

export default HomeScreeen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#333'
    },
    scrollList:{
        color:'#fff',
        paddingBottom:10
    },

    header:{
        paddingHorizontal:20,
        backgroundColor:'#000',
        borderBottomRightRadius :50,
        borderBottomLeftRadius :50,
        height:250,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:0,
        overflow:'hidden',
        right:0,
        left:0,
        zIndex:111

    },
    
    input:{
        height:50,
        width:'100%',
        backgroundColor:'#333',
        color:'#fff',
        paddingHorizontal:10,
        borderRadius:50,
        marginTop:20,


    }
  
})