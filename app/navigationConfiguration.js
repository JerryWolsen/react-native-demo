import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import MovieList from "./containers/MovieList";
import SettingScreen from "./containers/Settings";
import Counter from "./containers/CounterApp"
import Ionicons from 'react-native-vector-icons/Ionicons'
import IconWithBadge from "./components/HomeIconWithBadge";
import React from 'react'

const HomeStackNavigator = createStackNavigator(
  {
    Home: Counter,
    Movies: MovieList
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Settings: SettingScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor}) => {
          const { routeName } = navigation.state
          let IconComponent = Ionicons, iconName
          if(routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`
            IconComponent = IconWithBadge
          } else if (routeName === 'Settings') {
            iconName = 'ios-options'
          }

          return <IconComponent name={iconName} size={25} color={tintColor}/>
        },

    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
)

export default TabNavigator
