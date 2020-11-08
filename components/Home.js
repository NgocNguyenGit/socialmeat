import React from 'react'
import { Image, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export default class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/logo.jpg')} resizeMode="contain" style={{
                    height:200, width:200,marginBottom:20
                }} />
                <Button mode='contained' style={{width:200}} onPress={()=>this.props.navigation.navigate("Profile")}>Sign In</Button>
                <Button mode='outlined' style={{width:200,marginTop:10}} onPress={()=>this.props.navigation.navigate("Register")}>Register</Button>
            </View>
        )
    }
}