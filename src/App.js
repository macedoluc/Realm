import 'react-native-gesture-handler';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import Informacoes from './pages/inforcacoes';
import Login from './pages/login';
import Listagem from './pages/listagem';
import Cadastro from './pages/cadastro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#42ff'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Home"
        g
        component={Home}
        options={{title: 'Página Inicial'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Página de Login'}}
      />
      <Stack.Screen
        name="Informacoes"
        component={Informacoes}
        options={{title: 'Página de Informações'}}
      />
      <Stack.Screen
        name="Listagem"
        component={Listagem}
        options={{title: 'Listagem de Produtos'}}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{title: 'Cadastro de Produtos'}}
      />
    </Stack.Navigator>
  );
}

function InformacoesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Informacoes"
      screenOptions={{
        headerStyle: {backgroundColor: '#42ff'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Informacoes"
        component={Informacoes}
        options={{title: 'Página Informações'}}
      />
    </Stack.Navigator>
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#42ff',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="InformacoesStack"
        component={InformacoesStack}
        options={{
          tabBarLabel: 'Informacoes',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="add" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default App;
