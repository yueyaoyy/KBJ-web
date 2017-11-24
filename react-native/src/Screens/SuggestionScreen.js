import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
    TouchableHighlight
} from 'react-native';
import Util from '../Utils/Utils';

export default class EditInfo extends Component<{}> {
    static navigationOptions = {
        headerTitle: 
        <View style={{width: Util.size.width/1.4, alignItems: 'center'}}>
            <Text style={{color:"grey", fontSize:20, }}>意见反馈</Text>
        </View>
    }
    
    render() {
        return (
            <ScrollView>
                <View style={styles.text}>
                    <Text>反馈内容</Text>
                </View>
                <View style={styles.input}>
                    <TextInput placeholder='如果有任何意见或者建议，或者遇到内容方面的错误、程序的bug，请在此处输入向我们提交'
                    multiline={true}
                    underlineColorAndroid= 'transparent' />
                </View>
                <View style={styles.text}>
                    <Text>联系方式</Text>
                </View>
                <View style={styles.contact}>
                    <TextInput placeholder='邮箱/QQ/电话'
                    underlineColorAndroid= 'transparent' />
                </View>
                <TouchableHighlight>
                <View style={styles.btn}>
                    <Text style={{fontSize:14, color:'white'}}>提交</Text>
                </View>
            </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        height:Util.size.width/10,
        paddingTop:Util.size.width/30,
        marginLeft:Util.size.width/30,
    },
    input: {
        width: Util.size.width/1.1,
        height: Util.size.width/2, 
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 4,
        alignSelf:'center',
        backgroundColor:'white'
    },
    contact: {
        width: Util.size.width/1.1,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 4,
        alignSelf:'center',
        backgroundColor:'white'
    },
    btn: {
        marginTop:Util.size.width/30,
        width:Util.size.width/2,
        height:Util.size.width/10,
        backgroundColor: '#ea5252',
        flexDirection: 'row',
        justifyContent:'center', 
        alignSelf:'center',  
        alignItems:'center',
        borderRadius:4,
    },
})
