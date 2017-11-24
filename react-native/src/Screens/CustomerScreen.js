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
	Switch
} from 'react-native';
import Util from '../Utils/Utils';
import IconFA from 'react-native-vector-icons/FontAwesome';

class CustomerScreen extends React.Component {
	static navigationOptions = {
		headerTitle: 
			<View style={{alignSelf: 'center', }}>
				<Text style={{color:"grey", fontSize:20,}}>账户信息</Text>
			</View>,
		tabBarLabel: '用户',
		tabBarIcon: ({ tintColor, focused }) => (
			<IconFA
			name={'user'}
			size={26}
			style={{ color: tintColor }}
			/>
		)
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<ScrollView style={{backgroundColor: '#efede8'}}>
				<TouchableHighlight underlayColor='white' onPress={() => navigate('Login')}>
					<View style={styles.headView}>
						<View style={styles.head}>
							<View style={styles.imgView}>
								<IconFA style={styles.icon} size={25} name="user" />
							</View>
							<View style={styles.user}>
								<Text>User</Text>
							</View>     
						</View>
					</View>
				</TouchableHighlight>

				<TouchableHighlight onPress={() => navigate('EditInfo')}>
					<View style={styles.info}>
						<Text>个人信息</Text>   
					</View>
				</TouchableHighlight>

				<TouchableHighlight onPress={() => navigate('WishList')}>
					<View style={styles.info}>
						<Text>收藏商品</Text>
					</View>
				</TouchableHighlight>

				<View style={styles.info}>
					<View style={styles.propell}>
						<View style={styles.propellText}>  
							<Text>是否推送</Text> 
						</View>
						<View style={styles.switch}>  
							<Switch onTintColor='green' thumbTintColor='white'/>
						</View>
					</View>
				</View>

				<TouchableHighlight>
					<View style={styles.info}>
						<Text>清除缓存</Text>   
					</View>
				</TouchableHighlight>

				<TouchableHighlight onPress={() => navigate('Suggestion')}>
					<View style={styles.info}>
						<Text>意见反馈</Text>   
					</View>
				</TouchableHighlight>

				<TouchableHighlight onPress={() => navigate('AboutOurs')}>
					<View style={styles.info}>
						<Text>关于我们</Text>   
					</View>
				</TouchableHighlight>

				<TouchableHighlight>
					<View style={styles.btn}>
						<Text style={{fontSize:14, color:'white'}}>退出登录</Text>
					</View>
				</TouchableHighlight>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
    title: {
        height:Util.size.width/10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor:'white',
        alignItems: 'center',
    },
    headView: {
        paddingTop:Util.size.width/50,
    },
    head: {
        flexDirection: 'row',
        marginTop:Util.size.width/50,
        height:Util.size.width/5,
        backgroundColor:'white',
        paddingLeft:Util.size.width/50,
        paddingTop:Util.size.width/30,
        marginBottom:Util.size.width/40,
    },
    imgView: {
        height:Util.size.width/8,
        width:Util.size.width/8,
        borderRadius:100,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color:'white'
    },
    user: {
        paddingLeft:Util.size.width/20,
        paddingTop:Util.size.width/30,
    },
    info: {
        height:Util.size.width/8,
        backgroundColor:'white',
        paddingLeft:Util.size.width/20,
        borderBottomWidth:1,
        borderColor:'#D1D1D1',
        justifyContent:'center'
    },
    propell: {
        flex:1,
        flexDirection: 'row',
        paddingTop:Util.size.width/30,
    },
    propellText: {
        flex:0.6,
    },
    switch: {
        flex:0.4,
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
export default CustomerScreen