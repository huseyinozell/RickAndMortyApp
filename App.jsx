import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainScreen from './src/components/screens/main-screen';
import CharacterList from './src/components/screens/characters-screen';
import CharacterDetails from './src/components/screens/character-details-screen';
import FavoriteCharacterList from './src/components/screens/favorite-characters-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/state/store';

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
      <Tab.Screen
        name="Favoriler"
        component={FavoriteCharacterList}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="basketball" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MainTabs"
              component={MainTabNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EpisodeCharacterList"
              options={{headerTitle: 'Bölüm-Karakter Listesi'}}
              component={CharacterList}
            />
            <Stack.Screen
              name="CharacterDetails"
              options={{headerTitle: 'Karakter Detayları'}}
              component={CharacterDetails}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
