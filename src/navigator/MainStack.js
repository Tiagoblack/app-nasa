import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from  '@react-navigation/stack'

const Stacks = createStackNavigator();

import Field from '../page/Field';
import Home from '../page/HomeScreeen';


const MainStack = () => {
    return (
       <Stacks.Navigator>
           <Stacks.Screen name='Home' component={Field}/>
           <Stacks.Screen name='Field' component={Home}/>
       </Stacks.Navigator>
    )
}

export default MainStack

