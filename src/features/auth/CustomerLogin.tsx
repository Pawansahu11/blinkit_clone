import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const CustomerLogin: FC = () => {
    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.container}>

            </View>
        </GestureHandlerRootView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default CustomerLogin