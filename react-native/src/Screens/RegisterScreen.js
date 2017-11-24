import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView,
    Image,
    TextInput,
  } from 'react-native';
  import Util from '../Utils/Utils';
  import images from '../Themes/Images'

  export default class Register extends Component<{}> {
    constructor(){
        super()
        this.state = {
        text: 0,
        can: true,
        }
    }

    change(){
        if(this.state.can) {
            this.setState({
            text: 1,
            can: false,
        })
        } else {
            this.setState({
                text: 0,
                can: true,
            })
        }
    }
      render() {
          return(
              <ScrollView>
                <View style={styles.imgview}>
                    <Image style={styles.img} source={images.title}/>
                </View>
                <View style={{marginTop: Util.size.width/20,}}>
                    <View style={styles.touch}>
                        <TextInput style={styles.input} underlineColorAndroid= 'transparent' placeholder="邮箱/手机号码"/>
                    </View>
                    <View style={styles.touch}>
                        <TextInput style={styles.input1} underlineColorAndroid= 'transparent' placeholder="昵称"/>
                    </View>
                    <View style={styles.touch}>
                        <TextInput style={styles.input1} underlineColorAndroid= 'transparent' placeholder="密码"/>
                    </View>
                    <View style={styles.touch}>
                        <TextInput style={styles.input1} underlineColorAndroid= 'transparent' placeholder="确认密码"/>
                    </View>
                </View>
                <View style={styles.touch}>
                    <View style={styles.longin}>
                        <TouchableHighlight>
                            <Text>注册</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.agree}>
                    <View style={styles.agree1}>
                        <View>
                            <TouchableHighlight underlayColor='white' onPress={this.change.bind(this)}>
                                <View style={styles.radio}>
                                    {this.state.text === 1 ? <View style={styles.radio1}></View> : <View></View>} 
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Text numberOfLines={1}>注册即代表您同意《可比价用户协议》</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
          )
      }
  }

  const styles = StyleSheet.create({
    imgview: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: Util.size.height/14,
    },
    interval: {
        marginTop: Util.size.height/10,
    },
    touch: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    img: {
        marginTop: Util.size.width/8,
        width: Util.size.width/2.4,
        height: Util.size.height/14,
    },
    icon: {
        paddingLeft: Util.size.width/40,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        width: Util.size.width/2,
        height: Util.size.height/15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginTop: Util.size.height/8,
        width: Util.size.width/1.4,
        height: Util.size.height/15,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    input1: {
        marginTop: Util.size.height/50,
        width: Util.size.width/1.4,
        height: Util.size.height/15,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    longin: {
        marginTop: Util.size.width/8,
        width: Util.size.width/1.4,
        height: Util.size.height/15,
        backgroundColor: '#B8B8B8',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    password: {
        width: Util.size.width/1.4,
        height: Util.size.height/15,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radio: {
        width: Util.size.width/20,
        height: Util.size.width/20,
        borderRadius: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ea5252',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radio1: {
        width: Util.size.width/50,
        height: Util.size.width/50,
        backgroundColor: '#ea5252',
        borderRadius: 100,
    },
    agree: {
        marginTop: Util.size.width/40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    agree1: {
        flexDirection: 'row',
    },
})