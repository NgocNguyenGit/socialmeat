import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Appbar, Button, Chip, TextInput } from 'react-native-paper'
import DatePicker from 'react-native-date-picker'
import { CheckBox } from 'react-native-elements'

export default class Home extends React.Component {
    state = {
        pdate: ''
    }
    render() {
        return (
            <>
                <Appbar.Header>
                    <Appbar.Content title="Create an Invite" />
                </Appbar.Header>
                <ScrollView contentContainerStyle={{padding:10}}>
                    <TextInput label='Title for the Event' placeholder="e.g. Christmas Party" />
                    <Text style={{textAlign:'center',marginTop:10}}>Date of Event</Text>
                    <DatePicker style={{alignSelf:'center'}}
                        onDateChange={e => this.setState({ pdate: e })}
                    />
                    <Text>Select Guests</Text>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Chip selected>Deepjyoti Paul</Chip>
                            <Chip selected>Linnéa Hammarberg</Chip>
                            <Chip selected>Nguyen Le Khanh Ngoc</Chip>
                            <Chip selected>Tulika Ganoo</Chip>
                        </ScrollView>
                    </View>
                    <Text style={{textAlign:'center',marginTop:10}}>Food Items</Text>
                    <CheckBox title="Pork" />
                    <CheckBox title="Broiller" />
                    <CheckBox title="Beef" />
                    <CheckBox title="Icecream" />
                    <Button mode='contained' onPress={()=>this.props.navigation.navigate("Party Summary")}>Create Event</Button>
                </ScrollView>
            </>
        )
    }
}