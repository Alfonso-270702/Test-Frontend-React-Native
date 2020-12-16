import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Live } from '../screens'

const LiveStackScreen = createStackNavigator()

export default function LiveStack() {
    return (
        <LiveStackScreen.Navigator>
            <LiveStackScreen.Screen name="Live" component={Live} options={{
                headerStyle:{
                    backgroundColor: '#51adcf'
                },
                headerTintColor: '#fff'
            }} />
        </LiveStackScreen.Navigator>
    )
}
