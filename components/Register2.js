import React from 'react'
import { Image, Text, View } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';

var slides = [
    {
        key: 1,
        title: 'Do you like sugar or spice?',
        image: require('../assets/1.jpg'),
        op1:'Sugar',
        op2:'Spice'
    },
    {
        key: 2,
        title: 'What is your meat preferences?',
        image: require('../assets/2.jpg'),
        op1:'Pork',
        op2:'Chicken'
    },
    {
        key: 3,
        title: 'How much can you eat?',
        image: require('../assets/3.jpg'),
        op1:'A lot',
        op2:'Little to moderate'
    }
];
export default class Home extends React.Component {
    _renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/logo.jpg')} resizeMode="contain" style={{
                    height: 50, width: 50, marginBottom: 20, marginTop: 10
                }} />
                <Text style={{ marginBottom: 20, fontSize: 20, textAlign: 'center', marginBottom: 100 }}>Tell Us about your eating preferences</Text>
                <Text style={{ textAlign: 'center', alignSelf: 'center', fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>{item.title}</Text>
                <Image source={item.image} style={{ height: 200 }} resizeMode='contain' />
                <Button style={{ width: 200, marginTop: 10 }} mode='contained'>{item.op1}</Button>
                <Button style={{ width: 200, marginTop: 10 }} mode='contained'>{item.op2}</Button>
            </View>
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        // this.setState({ showRealApp: true });
        this.props.navigation.navigate('Register3')
    }
    render() {
        return (
            <>
                <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} showNextButton={true} renderNextButton={() => <Button>Next</Button>} showPrevButton={true} renderPrevButton={() => <Button>Previous</Button>} renderDoneButton={()=><Button>Done</Button>} />
                {/* </View> */}
            </>
        )
    }
}