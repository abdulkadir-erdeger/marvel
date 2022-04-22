import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Character from './pages/Character';
import Comics from './pages/Comics';
import Favorite from './pages/Favorite';
import Details from './pages/Details';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import auth from '@react-native-firebase/auth';
import FavProvider from './context';

const Stack = createNativeStackNavigator();

export default function Router() {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => setUserSession(!!user));

    return () => {
      setUserSession();
    };
  }, []);

  return (
    <FavProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: '#3849aa',
            },
          }}>
          {userSession ? (
            <>
              <Stack.Screen
                name="HomePage"
                component={Home}
                options={({navigation}) => ({
                  title: 'Marvel',
                  headerLeft: () => (
                    <Icon
                      name="logout"
                      color="white"
                      size={28}
                      onPress={() => auth().signOut()}
                    />
                  ),
                  headerRight: () => (
                    <Fontisto
                      name="favorite"
                      color="white"
                      size={24}
                      onPress={() => navigation.navigate('FavoritePage')}
                    />
                  ),
                })}
              />
              <Stack.Screen
                name="CharacterPage"
                component={Character}
                options={({route}) => ({
                  title: route.params.name,
                })}
              />
              <Stack.Screen
                name="ComicsPage"
                component={Comics}
                options={({route}) => ({
                  title: route.params.title,
                })}
              />
              <Stack.Screen
                name="FavoritePage"
                component={Favorite}
                options={{
                  title: 'Favorite',
                }}
              />
              <Stack.Screen
                name="DetailsPage"
                component={Details}
                options={{
                  title: 'Details',
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="LoginPage"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="RegisterPage"
                component={Register}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </FavProvider>
  );
}
