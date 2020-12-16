import React from 'react'
import { View, StyleSheet, Button, AsyncStorage } from 'react-native'

export default function Profile({ navigation }) {

    async function logoutHandler(){
        try {
            await AsyncStorage.removeItem('user_token')
            await alert('Berhasil Log out')
            await navigation.navigate('Home')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{marginBottom: 10, width:80}}>
                <Button title="Login" onPress={() => navigation.navigate('LoginForm')} />
            </View>
            <View style={{width: 80}}>
                <Button title="Logout" onPress={() => logoutHandler()} color="#ff4646" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9e4dd',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
