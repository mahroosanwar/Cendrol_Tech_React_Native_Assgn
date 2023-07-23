import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ShowsList from './screens/ShowsList';
import ShowDetails from './screens/ShowDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ShowsList} />
        <Stack.Screen name="Details" component={ShowDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
