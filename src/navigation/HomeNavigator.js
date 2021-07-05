import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../ui/screens/Home';
import ReviewDetails from '../ui/screens/ReviewDetails';
import Header from '../ui/components/Header';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ccc',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} />,
            headerTitleContainerStyle: {
              left: 0,
              right: 0,
            },
          };
        }}
      />
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
    </HomeStack.Navigator>
  );
};

export {HomeNavigator};
