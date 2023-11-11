import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './screens/Menu';
import Category from './screens/Category';
import Dresses from './screens/Dresses';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Menu' component={Menu}/>
        <Stack.Screen name='Category' component={Category}/>
        <Stack.Screen name='Dress' component={Dresses}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
