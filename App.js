import { Provider } from 'react-native-paper'
import { Navigation } from 'react-native-navigation';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from './src/Theme/Theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  Dashboard,
  FriendScreen,
  ProfileScreen,
} from './src/screens'



const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator  
              initialRouteName="Dashboard"
              activeColor="#e91e63"
              barStyle={{ backgroundColor: 'tomato' }}>
            <Tab.Screen 
                name='Dashboard'
                component={Dashboard}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                  ),
                }}   
            />
            <Tab.Screen 
                name="FriendScreen"
                component={FriendScreen}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                  ),
                }}
            />
            <Tab.Screen 
                name="ProflieScreen"
                component={ProfileScreen}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                  ),
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    );
}


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}