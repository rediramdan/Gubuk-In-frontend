import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import BukuSaya from './src/screens/BukuSaya';
import Koleksi from './src/screens/Koleksi';
import AddBook from './src/screens/AddBook';
import AddImage from './src/screens/AddImage';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Detail from './src/screens/Detail';
import Splash from './src/screens/Splash';
import Landing from './src/screens/Landing';
import ShowPdf from './src/screens/ShowPdf';
import Verify from './src/screens/Verify';
import VerifyEmail from './src/screens/VerifyEmail';
import Forgot from './src/screens/Forgot';
import ChangePassword from './src/screens/ChangePassword';
import ChangeProfile from './src/screens/ChangeProfile';

import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = createStackNavigator();
const BottomTab = () => {
  const islogin = useSelector(state => state.auth.isLogin);
  const style = {style: {paddingBottom: islogin?5:0, paddingTop: islogin?5:0}};
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      screenOptions={{tabBarVisible: islogin}}
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
        name="Koleksi"
        component={Koleksi}
        options={{
          tabBarLabel: ({focused}) => {
            const color = focused ? '#5E94FF' : 'rgba(0,0,0,0.2)';
            const size = 10;
            return <Text style={{color: color, fontSize: size}}>Koleksi</Text>;
          },
          tabBarIcon: ({focused}) => {
            const color = focused ? '#5E94FF' : 'rgba(0,0,0,0.2)';
            return (
              <Icon style={{color: color, fontSize: 25}} name={'book-multiple'} />
            );
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
            return (
              <Text style={{color: color, fontSize: size}}>Buku saya</Text>
            );
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
    <Provider store={store}>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Forgot">
          <Screen name="Splash" component={Splash} />
          <Screen name="BukuSaya" component={BukuSaya} />
          <Screen name="ShowPdf" component={ShowPdf} />
          <Screen name="AddBook" component={AddBook} />
          <Screen name="Landing" component={Landing} />
          <Screen name="Home" component={BottomTab} />
          <Screen name="Search" component={Search} />
          <Screen name="Profile" component={Profile} />
          <Screen name="Login" component={Login} />
          <Screen name="Register" component={Register} />
          <Screen name="AddImage" component={AddImage} />
          <Screen name="Verify" component={Verify} />
          <Screen name="Detail" component={Detail} />
          <Screen name="VerifyEmail" component={VerifyEmail} />
          <Screen name="Forgot" component={Forgot} />
          <Screen name="ChangePassword" component={ChangePassword} />
          <Screen name="ChangeProfile" component={ChangeProfile} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
