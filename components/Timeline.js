
import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View, Modal
} from 'react-native';
import { Appbar } from 'react-native-paper';
import Timeline from 'react-native-timeline-flatlist'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImageViewer from 'react-native-image-zoom-viewer';

export default class Example extends Component {
    constructor() {
        super()
        this.onEventPress = this.onEventPress.bind(this)
        this.renderSelected = this.renderSelected.bind(this)
        this.renderDetail = this.renderDetail.bind(this)

        this.data = [
            {
                time: 'Aug 1\n2015',
                title: 'Pig is born in the farm',
                description: 'After birth, the pig is kept in well maintained environment so that the pig can grow healthy naturally. Extra care towards growth, nutrition and hygiene is taken seriously',
                lineColor: '#009688',
                icon: require('../assets/im1.png'),
                imageUrl: [require('../assets/img1.png')]
            },
            {
                time: 'Dec 1\n2015',
                title: 'The pig is released with other pigs',
                description: 'The pig is released to socialize with other pigs which increases mental and physical health',
                icon: require('../assets/im2.png'),
                imageUrl: [require('../assets/img2.png')]
            },
            {
                time: 'May 1\n2016',
                title: 'The pig weighed 10 KG today',
                icon: require('../assets/im3.png'),
                description: 'A periodical weighing was performed today for all the pigs. The pig was recorder of 10 KG today.',
            },
            {
                time: 'Aug 1\n2017',
                title: 'The pig is shifted to Farm 4 under surveilience',
                description: 'After maturing age the pig is shifted to a well equipped farm to monitor day-round activities, vitals and nutritions',
                lineColor: '#009688',
                icon: require('../assets/im4.png'),
                imageUrl: [require('../assets/img3.png'), require('../assets/img5.png'), require('../assets/img7.png')]
            },
            {
                time: 'Aug 1\n2020',
                title: 'The pig is processed today',
                description: 'Periodic carbon footprint was collected. See here',
                icon: require('../assets/im5.png'),
                imageUrl: [require('../assets/img9.png')]
            },
            {
                time: 'Aug 2\n2020',
                title: 'Porks are collected and separated',
                description: 'Different parts are cleansed and processed in separate chambers',
                icon: require('../assets/im6.png'),
                imageUrl: [require('../assets/img5.png')]
            },
            {
                time: 'Aug 2\n2020',
                title: 'Pork is containerized and packaged',
                description: 'All the necessary precautions and cleansing was done before packaging and temperatures of the persons involved were recorded',
                icon: require('../assets/im7.png'),
            },
            {
                time: 'Aug 3\n2020',
                title: 'Package shipped to our authorized retailer',
                description: 'We shipped the packages to our authorized reseller ABC Meat Corp.',
                icon: require('../assets/im8.png'),
            },
            {
                time: 'Aug 5\n2020',
                title: 'Pork package received by retailer',
                description: 'Package was received by the reseller',
                icon: require('../assets/im9.png'),
            },
            {
                time: 'Aug 10\n2020',
                title: 'Package purchased by customer',
                description: 'The customer purchases the package',
                icon: require('../assets/im10.png'),
            },
            {
                time: 'Aug 12\n2020',
                title: 'Pork is cooked on Party date',
                description: 'Enjoy :)',
                icon: require('../assets/im11.png'),
            },
        ]
        this.state = { selected: null }
    }

    onEventPress(data) {
        this.setState({ selected: data })
    }

    renderSelected() {
        if (this.state.selected)
            return <Text style={{ marginTop: 10 }}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
    }

    renderDetail(rowData, sectionID, rowID) {
        let title = <Text style={[styles.title]}>{rowData.title}</Text>
        var desc = null
        if (rowData.description && rowData.imageUrl)
            desc = (
                <View style={styles.descriptionContainer}>
                    {
                        rowData.imageUrl.map((x, i) => <Image source={x} style={{ width: 300, height: 200 }} />)
                    }
                    <Text style={[styles.textDescription]}>{rowData.description}</Text>
                </View>
            )
        else desc = (
            <View style={styles.descriptionContainer}>
                <Text style={[styles.textDescription]}>{rowData.description}</Text>
            </View>
        )

        return (
            <View style={{ flex: 1 }}>
                {title}
                {desc}
            </View>
        )
    }

    render() {
        return (
            <>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
                    <Appbar.Content title="Party vs My Eating Habits" />
                </Appbar.Header>
                <View style={styles.container}>
                    {this.renderSelected()}
                    <Timeline
                        style={styles.list}
                        data={this.data}
                        circleSize={20}
                        circleColor='white'
                        lineColor='darkgreen'
                        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                        timeStyle={{ textAlign: 'center', backgroundColor: 'darkgreen', color: 'white', padding: 5, borderRadius: 13 }}
                        descriptionStyle={{ color: 'gray' }}
                        options={{
                            style: { paddingTop: 5 }
                        }}
                        innerCircle={'icon'}
                        onEventPress={this.onEventPress}
                        renderDetail={this.renderDetail}
                    />
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionContainer: {
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textDescription: {
        marginLeft: 10,
        color: 'gray'
    }
});