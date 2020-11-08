import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { AirbnbRating, ListItem, Rating } from 'react-native-elements'
import { Appbar, Banner, Button, Card, DataTable, Divider, IconButton } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class PartyVsHabit extends React.Component {
    render() {
        return (
            <>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
                    <Appbar.Content title="Sustainability Report" />
                </Appbar.Header>
                <ScrollView contentContainerStyle={{ backgroundColor: 'white', }}>
                    <Image source={require('../assets/radar_copy.png')} resizeMode="contain" style={{
                        height: 300, width: 300, marginBottom: 20, marginTop: 10, alignSelf: 'center'
                    }} />
                    <Text style={{ textAlign: 'center' }}>Sustainability Rating</Text>
                    <AirbnbRating defaultRating={3} showRating={true} selectedColor='orange' />
                    <Text style={{ padding: 15, textAlign: 'center', backgroundColor: 'darkgreen', color: 'white', marginTop: 15 }}>Guests Food Habit Summary</Text>
                    <ListItem title="Pork" rightTitle="72%" bottomDivider />
                    <ListItem title="Chicken" rightTitle="28%" bottomDivider />
                    <ListItem title="Sweet" rightTitle="30%" bottomDivider />
                    <ListItem title="Spicy" rightTitle="70%" bottomDivider />
                    <ListItem title="Eating a Lot" rightTitle="35%" bottomDivider />
                    <ListItem title="Eating Less or Moderate" rightTitle="65%" bottomDivider />
                    <Text style={{ padding: 15, textAlign: 'center', backgroundColor: 'darkgreen', color: 'white', marginTop: 15 }}>Carbon and Water Footprint Comparison</Text>
                    <DataTable style={{}}>
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
                        contentStyle={{ borderTopColor: 'darkgreen', borderTopWidth: 5, borderBottomColor: 'darkgreen', borderBottomWidth: 5 }}
                        actions={[
                            {
                                label: 'Know HKScan Pork production process',
                                onPress: () => this.props.navigation.navigate("Timeline"),

                            },
                        ]}
                        icon={({ size }) => (
                            <MaterialCommunityIcons name='leaf' color='darkgreen' size={30} />
                        )}>
                        <Text style={{ color: 'darkgreen', fontWeight: '700' }}>Sustainability Tip: </Text>
                        <Text>Choose Chicken over Pork to reduce Carbon Footprint by 18%</Text>
                    </Banner>
                    <View>
                        <Text style={{ padding: 15, textAlign: 'center', backgroundColor: 'darkgreen', color: 'white', marginTop: 15 }}>Retail Partners</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Image source={require('../assets/c1.png')} resizeMode='contain' />
                            <Image source={require('../assets/c2.png')} resizeMode='contain' />
                            <Image source={require('../assets/c3.png')} resizeMode='contain' />
                            <Image source={require('../assets/c4.png')} resizeMode='contain' />
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={{ padding: 15, textAlign: 'center', backgroundColor: 'darkgreen', color: 'white', marginTop: 15 }}>Recipe Suggestions</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Image source={require('../assets/r1.jpg')} resizeMode='contain' style={{margin:5}} />
                            <Image source={require('../assets/r2.jpg')} resizeMode='contain' style={{margin:5}}  />
                            <Image source={require('../assets/r3.jpg')} resizeMode='contain' style={{margin:5}}  />
                        </ScrollView>
                    </View>
                </ScrollView>
                <Button
                    icon="check"
                    color='darkgreen'
                    size={20}
                    mode='contained'
                    onPress={() => console.log('Pressed')}
                >Accept Report</Button>
            </>
        )
    }
}