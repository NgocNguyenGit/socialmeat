import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import Home from './components/Home'
import Invites from './components/Invites'
import CreateInvite from './components/CreateInvite'
import Choices from './components/Choices'
import Register1 from './components/Register1'
import Register2 from './components/Register2'
import Register3 from './components/Register3'
import PartyVsHabit from './components/PartyVsHabit'
import Timeline from './components/Timeline'
import PartySummary from './components/PartySummary'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const InviteStack = createStackNavigator();
const CreateInviteStack = createStackNavigator();
const ChoicesStack = createStackNavigator();

function InviteStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Invites" component={Invites} />
      <Stack.Screen name="PartyVsHabit" component={PartyVsHabit} />
      <Stack.Screen name="Timeline" component={Timeline} />
    </Stack.Navigator>
  )
}
function CreateInviteStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Create Invites" component={CreateInvite} />
      <Stack.Screen name="Party Summary" component={PartySummary} />
    </Stack.Navigator>
  )
}
function ChoicesStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Choices" component={Choices} />
    </Stack.Navigator>
  )
}


const RegisterStack = createStackNavigator()

function RegisterStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register1" component={Register1} />
      <Stack.Screen name="Register2" component={Register2} />
      <Stack.Screen name="Register3" component={Register3} />
    </Stack.Navigator>
  )
}

function ProfileScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Invites') {
            iconName = "home"
          }
          else if (route.name === 'Create Invites') {
            iconName = "plus"
          }
          else if (route.name === "Choices") {
            iconName = 'help-circle'
          }
          return <MaterialCommunityIcons name={iconName} color={color} size={size} />
        }
      })}
      tabBarOptions={{ activeBackgroundColor: '#17542b', activeTintColor: 'white', inactiveTintColor: '#17542b' }}>
      <Tab.Screen name="Invites" component={InviteStackScreen} />
      <Tab.Screen name="Create Invites" component={CreateInviteStackScreen} />
      <Tab.Screen name="Choices" component={ChoicesStackScreen} />
    </Tab.Navigator>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#17542b" barStyle='dark-content' />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={RegisterStackScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}