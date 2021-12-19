import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/navigator/MainStack';

export function App (){
  return(
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}