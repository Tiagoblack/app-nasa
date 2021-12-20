import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Main from './src/navigator/MainStack';
export default () =>(
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
