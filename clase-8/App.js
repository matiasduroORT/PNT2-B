import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterLoginScreen from './screens/RegisterLoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { AddProductScreen } from './screens/AddProductScreen';
import { ProductProvider } from './context/ProductContext';
import { ProductDetailScreen } from './screens/ProductDetailScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <ProductProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="RegisterLogin" component={RegisterLoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="AddProducto" component={AddProductScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ProductProvider>
  );
}

