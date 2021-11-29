import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionSpecs} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DetailsContainer from '../containers/Details/DetailsContainer';
import HomeContainer from '../containers/Home/HomeContainer';

const Stack = createNativeStackNavigator();

export default () => {
  const stackScreenOptions = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={stackScreenOptions}>
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="Details" component={DetailsContainer} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
