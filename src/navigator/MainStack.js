import React from 'react'
import {createStackNavigator} from  '@react-navigation/stack'

const Stacks = createStackNavigator();

import Field from '../page/Field'
import Home from '../page/HomeScreeen';


export default  () => (
       <Stacks.Navigator
            screenOptions={{
                headerShown:false,

            }}
       >
           <Stacks.Screen name='Home' component={Home}/>
           <Stacks.Screen name='Field' component={Field}/>
       </Stacks.Navigator>    
)


