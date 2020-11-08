import React from 'react'
import { Image, Text, View } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', alignSelf: 'center', fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>That's Great!</Text>
                    <Image source={require('../assets/radar_copy.png')} resizeMode="contain" style={{
                        height: 300, width: 300, marginBottom: 20, marginTop: 10
                    }} />
                    <Button mode='contained' onPress={()=>this.props.navigation.navigate('Profile')}>Let's Get Started</Button>
                </View>
            </>
        )
    }
}