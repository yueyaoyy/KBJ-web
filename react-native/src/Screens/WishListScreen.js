import React, { Component } from 'react';
import {
	Platform,
	Animated,
	Easing,
	View,
	Image,
	TouchableHighlight,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	TextInput,
	PanResponder,
} from 'react-native';
import Util from '../Utils/Utils';
import Images from '../Themes/Images'
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

const itemDate = [{key:0, img:Images.pg, name:"\u82f9\u679c\uff08\u0041\u0070\u0070\u006c\u0065\uff09\u0069\u0050\u0061\u0064\u0020\u0031\u0032\u0038\u0047\u0020\u0057\u004c\u0041\u004e\u7248\u0020\u0039\u002e\u0037\u82f1\u5bf8\u0020\u5e73\u677f\u7535\u8111"
	,shops:[{key:101, shop:"\u5929\u732b\u65d7\u8230\u5e97", price: "\uffe5" + 2498}
	,{key:102, shop:"\u56fd\u7f8e", price: "\uffe5" + 3088}
	,{key:103, shop:"\u82cf\u5b81\u6613\u8d2d", price: "\uffe5" + 3088}]
}
	,{key:1, img: Images.hw, name:"\u534e\u4e3a\u0020\u63fd\u9605\u004d\u0033\u0020\u0042\u0054\u0056\u002d\u0057\u0030\u0039\u0020\u0057\u0069\u0046\u0069\u7248\u0020\u0034\u0047\u002b\u0036\u0034\u0047\u5b58\u50a8\u0020\u0038\u002e\u0034\u82f1\u5bf8\u0020\u5e73\u677f\u7535\u8111"
	,shops:[{key:104, shop:"\u5929\u732b\u65d7\u8230\u5e97", price: "\uffe5" + 1888}
	,{key:105, shop:"\u4e2d\u56fd\u4e9a\u9a6c\u900a", price: "\uffe5" + 3088}
	,{key:106, shop:"\u82cf\u5b81\u6613\u8d2d", price: "\uffe5" + 2288}]}];

const itemDate1 = [];

class WishListScreen extends React.Component {
	constructor(props) {
        super(props);
        this.state={
        	list : false
        }
	}
	
	static navigationOptions = {
		header: null,
		tabBarLabel: '收藏',
		tabBarIcon: ({ tintColor, focused }) => (
			<IconFA
				name={'star'}
				size={26}
				style={{ color: tintColor }}
			/>
		)
	};

	render() {
		const noItems = (
			<View style={{justifyContent:'center'}}>
				<TouchableHighlight
					style={{
						justifyContent:'center',
						width: 80,
						height: 80,
						borderRadius: 40,
						backgroundColor: '#FFFFFF',
						marginLeft: (Util.size.width/2.5),
						marginTop: Util.size.width/3
					}}>
					<Text style={{ textAlign: 'center', textAlignVertical: 'center',}}>
						<IconMCI size={25} name="heart-broken" style={{color: "#ea5252",}}/>
					</Text>
				</TouchableHighlight>
				<Text style={{ textAlign: 'center', marginTop: Util.size.width/15}}>你还没有关注任何商品</Text>
			</View>
		);
		
		const itemsList = itemDate.length == 0 ? noItems : itemDate.map((elem, index) => {
			const shopsPrice = elem.shops.map((shopElem, shopIndex) => {
			return (
				<View style={styles.shopAndPrice} key={elem.key}>
					<Text style={styles.shop}>{shopElem.shop}</Text>
					<Text style={styles.price}>{shopElem.price}</Text>
				</View>
			);
			});
	
			return (      
			<TouchableOpacity style={styles.listSection} key={elem.key}>
				<View style={styles.left}>
					<Image source={elem.img} style={styles.img} resizeMode="contain"/>
				</View>
				<View style={styles.right}>
					<Text style={styles.name}>{elem.name}</Text>
					{shopsPrice}
				</View>
			</TouchableOpacity>
			);
		});
		
		return (
			<View style={styles.container} >
				<View style={styles.nav}>
					<View style={styles.pageTitle}>
						<Text underlineColorAndroid= 'transparent'>你关注的商品</Text>
					</View>
				</View>
				<View style={styles.content}>
					<ScrollView keyboardShouldPersistTaps='always'>
						{itemsList}
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#efede8',
	},
	nav: {
		flex: 0.09,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		justifyContent:'center'
	},
	pageTitle: {
		marginTop: Util.size.width/30,
	},
	content: {
		flex: 0.91,
	},
	listSection: {
		height: Util.size.width/3,
		marginTop: Util.size.width/50,
		marginLeft: Util.size.width/45,
		marginRight: Util.size.width/45,
		borderRadius: 2,
		borderBottomWidth: Util.pixel,
		borderColor: '#999999',
		flexDirection: 'row',
		justifyContent:'center',
		backgroundColor: '#FFFFFF',
	},
	left: {
		flex: 0.34,
	},
	right: {
		flex: 0.66,
	},
	img: {
		width: Util.size.width/4,
		height: Util.size.width/3,
		marginLeft: Util.size.width/50,
	},
	name: {
		marginTop: Util.size.width/50,
		marginRight: Util.size.width/30,
	},
	shopAndPrice: {
		marginTop: Util.size.width/60,
		flexDirection: 'row'
	},
	shop: {
		flex: 0.65,
		fontSize: 10
	},
	price: {
		flex: 0.35,
		marginLeft:Util.size.width/10, 
		fontSize: 10,
		color: '#e21414'
	},
});

export default WishListScreen