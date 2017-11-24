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
import IconFA from 'react-native-vector-icons/FontAwesome';

  export default class Login extends Component<{}> {
    static navigationOptions = {
    }
    render() {
      return (
        <ScrollView>
            <View style={styles.imgview}>
                <Image style={styles.img} source={images.title}/>
            </View>
            <View style={{marginTop: Util.size.width/20,}}>
                <View style={styles.touch}>
                    <TextInput style={styles.input} underlineColorAndroid= 'transparent' placeholder="邮箱"/>
                </View>
                <View>
                    <View style={[styles.touch,{marginTop: Util.size.width/20,}]}>
                        <View style={styles.password}>
                            <TextInput style={{width: Util.size.width/2,}} underlineColorAndroid= 'transparent' placeholder="密码"/>
                            <TouchableHighlight style={{justifyContent: 'center',paddingRight: Util.size.width/50,}}>
                                <Text>忘记密码</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.touch}>
                <View style={styles.longin}>
                    <TouchableHighlight>
                    <Text>登录</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={[styles.touch,{marginTop: Util.size.width/40,}]}>
                <TouchableHighlight>
                    <Text>没有账户，注册可比价账户</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
      );
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
      }
  })