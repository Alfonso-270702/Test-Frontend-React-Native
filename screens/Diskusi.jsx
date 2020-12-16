import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default function Diskusi({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title="Buat Group"
                onPress={() => navigation.navigate('Buat Group')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9e4dd',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
