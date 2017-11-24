import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
} from 'react-native';
import Util from '../Utils/Utils';

/**
 * 目录列表显示
 */
export default class Category extends Component<{}> {

    _data = [
        {name: '生活家电'},
        {name: '电脑、配件'},
        {name: '手机数码'},
        {name: '摄影、摄像'},
        {name: '办公网络'},
        {name: '电子教育'},
        {name: '厨卫电器'},
        {name: '健康电器'},
        {name: '影音视听'},
        {name: '手表闹钟'},
        {name: '运动户外'},
        {name: '母婴玩具'},
        {name: '食品保健'},
        {name: '外设、附件'},
        {name: '家居家装'},
        {name: '个护化妆'},
        {name: '汽车用品'},
        {name: '服饰鞋帽'},
        {name: '礼品箱包珠宝'},
        {name: '保健用品'},
        {name: '儿童玩具'},
    ]

    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            categoryIndex: 0,
            dataSource: ds.cloneWithRows(this._getRows(0))
        }
    }

    _renderRow(rowData, sectionID, rowID) {
        var cate = this._data[rowID];
        var styles_bg = rowData ? styles.category_bg_select : styles.category_bg_normal;
        var styles_color = rowData ? styles.category_color_select : styles.category_color_normal;

        return(
            <TouchableOpacity
                style={[styles.category, styles_bg]}
                onPress={() => this._rowPressed(rowID)}>
                <Text style={styles_color}>{cate.name}</Text>
            </TouchableOpacity>
        );
    }

    _rowPressed(id) {
        this.setState({
            categoryIndex: id,
            dataSource: this.state.dataSource.cloneWithRows(this._getRows(id)),
        })
    }

    _getRows(index){
        var holderList = [];
        for (var ii = 0; ii < this._data.length; ii++) {
            holderList[ii] = ii == index;
        };

        return holderList;
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView 
                //dataSource:数据源
                dataSource={this.state.dataSource}
                // renderRow: ListView每个item的样式
                renderRow={this._renderRow.bind(this)}
                />
            </View>
        );
    }
  }

  var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#eef0f3',
    },
    category: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Util.size.height/15,
        backgroundColor:'#dcdcdc'
    },
    category_bg_select:{
        backgroundColor: '#ffffff',
    },
    category_bg_normal:{
        backgroundColor: '#dcdcdc',
    },
    focategory_color_normal: {
        color: "grey"
    },
    category_color_select: {
        color: "#ff7f50"
    }
  })
