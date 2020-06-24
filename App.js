import 'react-native-gesture-handler';
import React from 'react';
import {YellowBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Beranda from './src/screens/Beranda';
import BukuSaya from './src/screens/BukuSaya';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = createStackNavigator();
const BottomTab = () => {
  const style = {style: {paddingBottom: 5, paddingTop: 5}};
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      tabBarOptions={style}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({focused}) => {
            const color = focused ? '#5E94FF' : 'rgba(0,0,0,0.2)';
            const size = 10;
            return <Text style={{color: color, fontSize: size}}>Home</Text>;
          },
          tabBarIcon: ({focused}) => {
            const color = focused ? '#5E94FF' : 'rgba(0,0,0,0.2)';
            return <Icon style={{color: color, fontSize: 32}} name="home" />;
          },
        }}
      />
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarLabel: ({focused}) => {
            const color = focused ? '#5E94FF' : 'rgba(0,0,0,0.2)';
            const size = 10;
            return <Text style={{color: color, fontSize: size}}>Beranda</Text>;
          },
          tabBarIcon: ({focused}) => {
            const color = focused ? '#5E94FF' : 'rgba(0,0,0,0.2)';
            return <Icon style={{color: color, fontSize: 25}} name="book-open" />;
          },
        }}
      />
      <Tab.Screen
        name="BukuSaya"
        component={BukuSaya}
        options={{
          tabBarLabel: ({focused}) => {
            const color = focused ? '#5E94FF' : 'rgba(0,0,0,0.2)';
            const size = 10;
            return <Text style={{color: color, fontSize: size}}>Buku saya</Text>;
          },
          tabBarIcon: ({focused}) => {
            const color = focused ? '#5E94FF' : 'rgba(0,0,0,0.2)';
            return <Icon style={{color: color, fontSize: 25}} name="book" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Screen name="Home" component={BottomTab} />
        <Screen name="Search" component={Search} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
