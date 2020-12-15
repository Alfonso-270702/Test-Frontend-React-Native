import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Diskusi, CreateGroup } from '../screens'

const DiskusiStackScreen = createStackNavigator()

export default function DiskusiStack() {
    return (
        <DiskusiStackScreen.Navigator >
            <DiskusiStackScreen.Screen name="Diskusi" component={Diskusi} options={{
                headerStyle:{
                    backgroundColor: '#0e49b5'
                },
                headerTintColor: '#fff'
            }} />
            <DiskusiStackScreen.Screen name="Buat Group" component={CreateGroup}
             options={{
                headerStyle:{
                    backgroundColor: '#0e49b5'
                },
                headerTintColor: '#fff'
            }} />
        </DiskusiStackScreen.Navigator>
    )
}
