import React from 'react'
import { View, Text, Button } from 'react-native'

const AuthScreen = () => {
    const loginHandler = () => {

    }
    return (
        <View>
            <Text>Auth Screen</Text>
            <Button title='Login' onPress={loginHandler}/>
        </View>
    )
}

export default AuthScreen