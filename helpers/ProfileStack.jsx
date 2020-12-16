import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Profile, LoginForm } from '../screens'

const ProfileStackScreen = createStackNavigator()

export default function ProfileStack() {
    return (
        <ProfileStackScreen.Navigator>
            <ProfileStackScreen.Screen name="Profile" component={Profile} options={{
                headerStyle:{
                    backgroundColor: '#51adcf'
                },
                headerTintColor: '#fff'
            }}/>
            <ProfileStackScreen.Screen name="LoginForm" component={LoginForm} options={{
                headerStyle:{
                    backgroundColor: '#51adcf'
                },
                headerTintColor: '#fff'
            }}/>
        </ProfileStackScreen.Navigator>
    )
}
