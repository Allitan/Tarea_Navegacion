import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddTodo from '../Pages/AddTodo/AddTodo';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Pages/Home/Home';
import Buscador from '../Pages/Buscador/Buscador';

export default function StackNavegacion() {

    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='AddTodo' component={AddTodo} />
                <Tab.Screen name='Buscador' component={Buscador}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}