import React from 'react'
import { StatusBar } from 'react-native';

import Routes from './src/routes';
import { NavigationContainer } from "@react-navigation/native"


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" barStyle={'default'} />
      <Routes />
    </NavigationContainer>
  );
}