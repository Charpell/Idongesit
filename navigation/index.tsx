import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text } from 'react-native'
import { black, white, orange } from '../helper/Color'
import MovieScreen from '../screen/MovieScreen'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import MovieDetailScreen from '../screen/MovieDetailScreen'
import WebViewScreen from '../screen/WebViewScreen'
import MovieListScreen from '../screen/MovieListScreen'
import SearchScreen from '../screen/SearchScreen'
import TVShowScreen from '../screen/TVShowScreen'
import TVDetail from '../screen/TVDetailScreen'
import OfflineNotice from '../components/OfflineNotice'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: false,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeDrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
        <Stack.Screen name="Webview" component={WebViewScreen} />
        <Stack.Screen name="Movielist" component={MovieListScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="TVDetail" component={TVDetail} />
      </Stack.Navigator>
    );
  };

const HomeDrawerNavigator = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Movies"
        drawerType={"slide"}
        drawerStyle={{ width: "50%", backgroundColor: black }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: orange,
          inactiveTintColor: white,
        }}
      >
        <Drawer.Screen
          name="Movies"
          component={MovieScreen}
          options={{
            drawerLabel: ({ color, focused }) => CustomDrawerStyle(color, focused, "Movies"),
          }}
        />
        <Drawer.Screen
        name="TV Show"
        component={TVShowScreen}
        options={{
          drawerLabel: ({ color, focused }) => CustomDrawerStyle(color, focused, "TV Shows"),
        }}
      />
      </Drawer.Navigator>
    );
  };

  const CustomDrawerStyle = (color, focused, title) => {
    return (
      <Text
        style={{
          fontSize: focused ? 20 : 16,
          fontWeight: null,
          color: color,
          fontFamily: focused ? "Montserrat-Bold" : "Montserrat-Light",
        }}
      >
        {title}
      </Text>
    );
  };


export default function index() {
  return (
    <NavigationContainer>
        <AppNavigator />
        <OfflineNotice />
    </NavigationContainer>
  );
}