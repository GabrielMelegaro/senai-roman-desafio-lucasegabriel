import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignInScreen from './pages/signin';

const AuthStack = createStackNavigator({
    Sign: {screen: SignInScreen},
});

const MainNavigator = createBottomTabNavigator(
    {
        Main: 
    }
)