import React from 'react'
import { Image, Text, View } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{fontSize:25,fontWeight:'700'}}>Register</Text>
                    <Image source={require('../assets/logo.jpg')} resizeMode="contain" style={{
                        height: 200, width: 200, marginBottom: 20,marginTop:10
                    }} />
                    <TextInput label="Full Name" style={{ width: 250, marginTop:10 }} mode='outlined' />
                    <TextInput label="Email" style={{ width: 250, marginTop:10 }} mode='outlined' />
                    <Button mode='contained' style={{ width: 250, marginTop:10 }} onPress={()=>this.props.navigation.navigate('Register2')}>Next: Eating Choices</Button>
                    <Button mode='text' style={{ width: 250, marginTop:10 }} color='gray' onPress={()=>this.props.navigation.navigate('Home')}>Home</Button>
                </View>
            </>
        )
    }
}