import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { AirbnbRating, ListItem, Rating } from 'react-native-elements'
import { Appbar, Banner, Button, Card, DataTable, Divider } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class PartyVsHabit extends React.Component {
    render() {
        return (
            <>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
                    <Appbar.Content title="Party vs My Eating Habits" />
                </Appbar.Header>
                <ScrollView contentContainerStyle={{ backgroundColor: 'white', }}>
                    <Image source={require('../assets/radarme.png')} resizeMode="contain" style={{
                        height: 300, width: 300, marginBottom: 20, marginTop: 10, alignSelf: 'center'
                    }} />
                    <Text style={{ textAlign: 'center' }}>Sustainability Rating</Text>
                    <AirbnbRating defaultRating={4.5} showRating={true} selectedColor='darkgreen' />
                    <Text style={{ color: 'darkgreen', fontWeight: '700', marginTop: 10, textAlign: 'center' }}>Excellent</Text>
                    <ListItem title="Your Sustainability Rank" subtitle="among party guests" rightTitle="5" rightSubtitle="/100" style={{ width: '100%' }} rightTitleStyle={{ color: 'darkgreen', fontWeight: '700', fontSize: 24 }} subtitleStyle={{ color: 'gray' }} />
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Item</DataTable.Title>
                            <DataTable.Title numeric>Carbon FP(CO2e/KG)</DataTable.Title>
                            <DataTable.Title numeric>Water FP(M3)</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>Pork</DataTable.Cell>
                            <DataTable.Cell numeric>9.27</DataTable.Cell>
                            <DataTable.Cell numeric>2550</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>Chicken</DataTable.Cell>
                            <DataTable.Cell numeric>7.86</DataTable.Cell>
                            <DataTable.Cell numeric>3035.5</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Pagination
                            label='Data from HKScan Agrofood Ecosystem'
                        />
                    </DataTable>
                    <Divider />
                    <Banner
                        visible={true}
                        actions={[
                            {
                                label: 'Know HKScan Pork production process',
                                onPress: () => this.props.navigation.navigate("Timeline"),
                                
                            },
                        ]}
                        icon={({ size }) => (
                            <MaterialCommunityIcons name='leaf' color='darkgreen' size={30} />
                        )}>
                            <Text style={{color:'darkgreen',fontWeight:'700'}}>Sustainability Tip: </Text>
                        <Text>You can save 1.41 CO2e/KG Carbon Footprint by choosing Chicken over Pork</Text>
    </Banner>
                </ScrollView>
            </>
        )
    }
}