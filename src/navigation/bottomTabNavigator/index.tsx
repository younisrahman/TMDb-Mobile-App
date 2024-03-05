import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LatestMovieScreen, PopularMovieScreen} from '@screens';
import {RootStackParamList} from 'types';
import {Colors} from '@config';
import {FireIcon, MovieIcon} from '@icons';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PopularMovieScreen"
        component={PopularMovieScreen}
        options={{
          title: 'Popular',
          headerTintColor: Colors.white,
          headerStyle: {backgroundColor: Colors.primary},
          tabBarIcon: ({color}) => <MovieIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name="LetestMovieScreen"
        component={LatestMovieScreen}
        options={{
          title: 'Latest',
          headerTintColor: Colors.white,
          headerStyle: {backgroundColor: Colors.primary},
          tabBarIcon: ({color}) => <FireIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
