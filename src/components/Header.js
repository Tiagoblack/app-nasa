import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../screen/logo.png')}
                style={{height:100, width: 150 }}
            />
            <TextInput 
              placeholder='Digite alguma coisa'
             style={styles.input}
             placeholderTextColor="#fff"
             / >
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        backgroundColor:'#000',
        borderBottomRightRadius :50,
        borderBottomLeftRadius :50,
        height:250,
        justifyContent:'center',
        alignItems:'center'

    },
    
    input:{
        height:50,
        width:'100%',
        backgroundColor:'#333',
        color:'#fff',
        paddingHorizontal:10,
        borderRadius:50,
        marginTop:20

    }
})
