import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../screens'

const ProfileStackScreen = createStackNavigator()

export default function ProfileStack() {
    return (
        <ProfileStackScreen.Navigator>
            <ProfileStackScreen.Screen name="Profile" component={Profile} />
        </ProfileStackScreen.Navigator>
    )
}
