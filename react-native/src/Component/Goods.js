import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    Image
} from 'react-native';
import Util from '../Utils/Utils';
import Images from '../Themes/Images'

const vMargin = (Util.size.width - 145 * 3) / (3 + 1);

/**
 * 商品展示
 */
export default class Content extends Component<{}> {

    _data = [
        {
            icon: Images.phone,
            name: '家电'
        },
        {
            icon: Images.phone,
            name: '电脑'
        },
        {
            icon: Images.phone,
            name: '手机'
        },
        {
            icon: Images.phone,
            name: '摄影'
        },
        {
            icon: Images.phone,
            name: '办公'
        },
        {
            icon: Images.phone,
            name: '电子'
        },
        {
            icon: Images.phone,
            name: '厨卫'
        },
        {
            icon: Images.phone,
            name: '健康'
        },
        {
            icon: Images.phone,
            name: '影音'
        },
        {
            icon: Images.phone,
            name: '手表'
        },
        {
            icon: Images.phone,
            name: '运动'
        },
        {
            icon: Images.phone,
            name: '母婴'
        },
        {
            icon: Images.phone,
            name: '食品'
        },
        {
            icon: Images.phone,
            name: '附件'
        },
        {
            icon: Images.phone,
            name: '家居'
        },
        {
            icon: Images.phone,
            name: '个护'
        },
        {
            icon: Images.phone,
            name: '汽车'
        },
        {
            icon: Images.phone,
            name: '服饰'
        },
        {
            icon: Images.phone,
            name: '礼品'
        },
        {
            icon: Images.phone,
            name: '保健'
        },
        {
            icon: Images.phone,
            name: '玩具'
        },
    ]

    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            categoryIndex: 0,
            dataSource: ds.cloneWithRows(this._data)
        }
    }

    _renderGoodsList(rowData) {

        return(
            <TouchableOpacity activeOpacity={0.8}>  
                <View style={styles.innerViewStyle}>  
                    <Image source={rowData.icon} style={styles.iconStyle} />
                    <Text>{rowData.name}</Text>  
                </View>  
            </TouchableOpacity>  
        );
    }

    render() {
      return (
        <View style={styles.container}>
            <ListView
                pageSize={3}
                contentContainerStyle={styles.grid}
                dataSource={this.state.dataSource}
                renderRow={this._renderGoodsList.bind(this)}/>
        </View>
      );
    }
  }

  var styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor:'#ffffff',
    },
    grid: {
        // 一行显示不下,换一行   
        flexWrap: 'wrap' ,
        // 侧轴方向
        alignItems:'center',
        // 主轴方向 
        flexDirection: 'row', 
        justifyContent: 'space-around',    
    },
    innerViewStyle:{  
        width: Util.size.width/3.6, 
        height: Util.size.height/5, 
        marginLeft: vMargin,
        marginTop: Util.size.height/30,
        // 文字内容居中对齐
        alignItems: 'center'  
    },
    iconStyle:{  
        width: Util.size.width/4.5,  
        height:Util.size.height/5.92,  
    },
  })
