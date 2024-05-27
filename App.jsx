import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainScreen from './src/components/screens/main-screen';
import CharacterList from './src/components/screens/characters-screen';
const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  tabBarStyle: {backgroundColor: 'black'},
};

const Stack = createStackNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        name="Anasayfa"
        component={MainScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
      name="Favoriler"
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="basketball" color={color} size={size} />
        ),
      }}
    /> */}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EpisodeCharacterList"
          options={{headerTitle: 'Karakter Listesi'}}
          component={CharacterList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
