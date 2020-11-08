import React from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Appbar.Header>
                    <Appbar.Content title="My Eating Choices" />
                </Appbar.Header>
            </>
        )
    }
}