import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
    TouchableHighlight,
    ListView
} from 'react-native';
import Util from '../Utils/Utils';

export default class Recommend extends Component<{}> {
    _data = [
        {title: '1',
        name:'双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券',
        value: require('../Images/yezi.jpg'),
        },
        {title: '2',
        name:'双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券',
        value: require('../Images/yezi.jpg'),
        },
        {title: '4',
        name:'双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券',
        value: require('../Images/yezi.jpg'),
        },
        {title: '5',
        name:'双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券',
        value: require('../Images/yezi.jpg'),
        },
        {title: '6',
        name:'双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券',
        value: require('../Images/yezi.jpg'),
        },
        {title: '7',
        name:'双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券',
        value: require('../Images/yezi.jpg'),
        },
    ]

    constructor() {
        super();
        var ds =new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._data),
        }
      }

      renderRow (item){
        return(
        <TouchableHighlight style={styles.blocks}>
            <View style={styles.hot}>
                <View style={styles.hotleft}>
                    <Text style={{color: 'black',}}>{item.name}</Text>
                </View>
                <View style={styles.hotright}>
                    <Image source={item.value} style={styles.hotimage}/>
                </View>
            </View>
        </TouchableHighlight>
        )}

    render() {
        return(
            <View ref='hot1' style={styles.block}>
                <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderRow.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    block: {
        // marginTop: Util.size.height/40,
    },
    blocks: {
        borderTopWidth: 0.2,
        paddingTop: Util.size.height/30,
    },
    hot: {
        flexDirection: 'row',
        height: Util.size.height/5,
        justifyContent: 'space-between',
    },
    hotleft: {
        width:Util.size.width/2,
        height: Util.size.height/6,
        marginLeft: Util.size.width/50,
        justifyContent: 'center',
    },
    hotright: {
        width:Util.size.width/2,
        height: Util.size.height/6,
        justifyContent: 'center',
    },
    hotimage: {
        height: Util.size.height/6,
        width: Util.size.width/2 - Util.size.width/20,
    }
})