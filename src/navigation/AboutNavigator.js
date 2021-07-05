import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../ui/screens/About';
import Header from '../ui/components/Header';

const AboutStack = createStackNavigator();

const AboutNavigator = () => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ccc',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <AboutStack.Screen
        name="About"
        component={About}
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
    </AboutStack.Navigator>
  );
};

export {AboutNavigator};
