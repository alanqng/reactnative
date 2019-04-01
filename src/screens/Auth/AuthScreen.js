import React from 'react'
import { View, Text, Button } from 'react-native'
import startTabs from '../MainTabs/startMainTabs';

const AuthScreen = () => {
    const loginHandler = () => {
        startTabs()
    }
    return (
        <View>
            <Text>Auth Screen</Text>
            <Button title='Login' onPress={loginHandler}/>
        </View>
    )
}

export default AuthScreen