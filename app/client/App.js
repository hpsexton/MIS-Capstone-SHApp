import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserAPI from './api/user.api'

import LoginScreen from './screens/login/index'
import HomeScreen from './screens/home/index'
import SampleScreen from './screens/sample/index'
import ProfileScreen from './screens/profile/index'
import JournalScreen from './screens/journal/index'
import AcademicScreen from './screens/academic/index'
import SideDrawer from './screens/sideDrawer/index'
import SurveyScreen from './screens/survey/index'

global.AppAccessToken = null;

const AppNavigator = createStackNavigator ({
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    Sample: {screen: SampleScreen},
    Profile: {screen: ProfileScreen},
    Journal: {screen: JournalScreen},
    Academic: {screen: AcademicScreen},
    Drawer: {screen: SideDrawer},
    Survey: {screen: SurveyScreen},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});


 
export default createAppContainer(AppNavigator);




