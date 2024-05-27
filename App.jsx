import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainScreen from "./src/components/main-screen";
const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  tabBarStyle: { backgroundColor: 'black' },
};




const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptionStyle}>
        <Tab.Screen
          name="Anasayfa"
          component={MainScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
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
    </NavigationContainer>
  );
}

export default App;