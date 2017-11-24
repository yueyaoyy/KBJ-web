import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import Util from '../Utils/Utils';
import { StackNavigator } from 'react-navigation';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFB from 'react-native-vector-icons/Entypo';
import IconFC from 'react-native-vector-icons/Feather';
import IconFD from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Link extends Component<{}> {
      
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.shortcut}>
                <TouchableHighlight underlayColor='white' onPress={() => navigate('Search')}>
                    <View style={[styles.icons,{backgroundColor: '#ea5252', borderColor: '#ea5252'}]}>
                        <IconFB size={20} name="line-graph" style={styles.icon} />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='white' onPress={() => navigate('Categroy')}>
                    <View style={[styles.icons,{backgroundColor: '#ea5252', borderColor: '#ea5252'}]}>
                        <IconFD size={20} name="search-web" style={styles.icon} />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='white' onPress={this.props.goHot}>
                    <View style={[styles.icons,{backgroundColor: '#ea5252', borderColor: '#ea5252'}]}>
                        <IconFB size={20} name="thumbs-up" style={styles.icon} />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='white' onPress={this.props.goHot1}>
                    <View style={[styles.icons,{backgroundColor: '#ea5252', borderColor: '#ea5252'}]}>
                        <IconFC size={20} name="trending-down" style={styles.icon} />
                    </View>
                </TouchableHighlight>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    shortcut: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:Util.size.width/30,
        paddingBottom: Util.size.width/30,
    }, 
    icons: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Util.size.width/8,
        width: Util.size.width/8,
        borderWidth: 1,
        borderRadius: 100,
    },
    icon: {
        color: 'white',
    },
})
