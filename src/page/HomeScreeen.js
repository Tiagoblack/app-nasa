import React, { useState, useEffect, useCallback}from 'react'
import {useNavigation} from '@react-navigation/native'
import { View, 
    Text, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet,
    ScrollView
} from 'react-native';

import Header from '../components/Header';
import  NasaApi from  '../components/NasaApi';
import Api from '../api'
const HomeScreeen = () => {

    const [req, setReq] = useState([])

    useEffect(()=>{
        const Nasa = async()=>{
            let res = await Api.getData();
            setReq(res)
        }

        Nasa()
    },[])
   /*

    const handleClick = (event)=>{
        event.nativeEvent.contentOffset.y > 10 ? hendleAnimation() :''
        
    }

    */

    const navigation = useNavigation();
    const handleClickNasa = (obj)=>{
        console.log(obj)
        navigation.navigate('Field', {obj})
    }

    return (
        
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#000" />
            <Header/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                //onScroll={handleClick}          
            >
                {req.map((item, index, array)=> <NasaApi 
                data={item} 
                index={index} 
                key={index}
                onPress={()=>handleClickNasa(array[index])}
                />)}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreeen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#333'
    },
    flatlist:{
        flex:1,
        color:'#fff'
    }

})