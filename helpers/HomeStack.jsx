import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens'

const HomeStackScreen = createStackNavigator()

export default function HomeStack() {
    return (
        <HomeStackScreen.Navigator>
            <HomeStackScreen.Screen name="Home" component={Home} options={{
                headerStyle:{
                    backgroundColor: '#51adcf'
                },
                headerTintColor: '#fff'
            }} />
        </HomeStackScreen.Navigator>
    )
}
