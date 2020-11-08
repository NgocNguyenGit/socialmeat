import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Icon, ListItem, Rating } from 'react-native-elements'
import { Appbar, Card } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Appbar.Header>
                    <Appbar.Content title="My Invites" />
                </Appbar.Header>
                <ScrollView style={{ paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}>
                    <Card>
                        <Card.Title title="Christmas Party" subtitle="Hosted by Jonathan on December 25" />
                        <Card.Content>
                            <ListItem title="Pork, Ice-creams" subtitle="Main Course" subtitleStyle={{ color: 'gray' }} leftIcon={<MaterialCommunityIcons name='food' size={30} />} />
                            <ListItem title="15 CO2e /KG" subtitle="Carbon Footprint" subtitleStyle={{ color: 'gray' }} leftIcon={<MaterialCommunityIcons name='molecule-co2' size={30} />} />
                            <ListItem title="1.5 M3" subtitle="Water Footprint" subtitleStyle={{ color: 'gray' }} leftIcon={<MaterialCommunityIcons name='water' size={30} />} />
                            <ListItem title="Moderate" subtitle="Environmental Impact" bottomDivider subtitleStyle={{ color: 'gray' }} leftIcon={<MaterialCommunityIcons name='emoticon-happy' color='#f5aa42' size={30} />} titleStyle={{ color: '#f5aa42' }} />
                            <ListItem title="Compare this party with your eating habit" chevron titleStyle={{fontSize:15}}  onPress={()=>this.props.navigation.navigate("PartyVsHabit")} />
                            <Text style={{textAlign:'center'}}>Rate the event and food quality</Text>
                            <Rating onFinishRating={()=>{}} />
                            <ListItem title="Data provided by HKScan Agrofood Ecosystem" titleStyle={{ color: 'gray', textAlign: 'center', fontSize:12 }} />
                        </Card.Content>
                    </Card>
                </ScrollView>
            </>
        )
    }
}