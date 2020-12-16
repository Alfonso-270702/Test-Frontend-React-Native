import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>HOME </Text>
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
