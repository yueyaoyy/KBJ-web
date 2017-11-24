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

const itemDate = [{key:0, img:Images.pg, name:"\u82f9\u679c\uff08\u0041\u0070\u0070\u006c\u0065\uff09\u0069\u0050\u0061\u0064\u0020\u0031\u0032\u0038\u0047\u0020\u0057\u004c\u0041\u004e\u7248\u0020\u0039\u002e\u0037\u82f1\u5bf8\u0020\u5e73\u677f\u7535\u8111"
,shops:[{key:101, shop:"\u5929\u732b\u65d7\u8230\u5e97", price: "\uffe5" + 2498}
       ,{key:102, shop:"\u56fd\u7f8e", price: "\uffe5" + 3088}
       ,{key:103, shop:"\u82cf\u5b81\u6613\u8d2d", price: "\uffe5" + 3088}]
}
 ,{key:1, img:Images.hw, name:"\u534e\u4e3a\u0020\u63fd\u9605\u004d\u0033\u0020\u0042\u0054\u0056\u002d\u0057\u0030\u0039\u0020\u0057\u0069\u0046\u0069\u7248\u0020\u0034\u0047\u002b\u0036\u0034\u0047\u5b58\u50a8\u0020\u0038\u002e\u0034\u82f1\u5bf8\u0020\u5e73\u677f\u7535\u8111"
,shops:[{key:104, shop:"\u5929\u732b\u65d7\u8230\u5e97", price: "\uffe5" + 1888}
       ,{key:105, shop:"\u4e2d\u56fd\u4e9a\u9a6c\u900a", price: "\uffe5" + 3088}
	   ,{key:106, shop:"\u82cf\u5b81\u6613\u8d2d", price: "\uffe5" + 2288}]}];
	   
const itemDate2 = [{key:0, img:Images.pg, name:"\u82f9\u679c\uff08\u0041\u0070\u0070\u006c\u0065\uff09\u0069\u0050\u0061\u0064\u0020\u0031\u0032\u0038\u0047\u0020\u0057\u004c\u0041\u004e\u7248\u0020\u0039\u002e\u0037\u82f1\u5bf8\u0020\u5e73\u677f\u7535\u8111"
,shops:[{key:101, shop:"\u5929\u732b\u65d7\u8230\u5e97", price: "\uffe5" + 2400}
		,{key:102, shop:"\u56fd\u7f8e", price: "\uffe5" + 3000}
		,{key:103, shop:"\u82cf\u5b81\u6613\u8d2d", price: "\uffe5" + 2500}]
}
,{key:1, img:Images.hw, name:"\u534e\u4e3a\u0020\u63fd\u9605\u004d\u0033\u0020\u0042\u0054\u0056\u002d\u0057\u0030\u0039\u0020\u0057\u0069\u0046\u0069\u7248\u0020\u0034\u0047\u002b\u0036\u0034\u0047\u5b58\u50a8\u0020\u0038\u002e\u0034\u82f1\u5bf8\u0020\u5e73\u677f\u7535\u8111"
,shops:[{key:104, shop:"\u5929\u732b\u65d7\u8230\u5e97", price: "\uffe5" + 1000}
		,{key:105, shop:"\u4e2d\u56fd\u4e9a\u9a6c\u900a", price: "\uffe5" + 9999}
		,{key:106, shop:"\u82cf\u5b81\u6613\u8d2d", price: "\uffe5" + 2500}]
}
,{key:2, img:Images.hw, name:"\u534e\u4e3a\u0020\u63fd\u9605\u004d\u0033\u0020\u0042\u0054\u0056\u002d\u0057\u0030\u0039\u0020\u0057\u0069\u0046\u0069\u7248\u0020\u0034\u0047\u002b\u0036\u0034\u0047\u5b58\u50a8\u0020\u0038\u002e\u0034\u82f1\u5bf8\u0020\u5e73\u677f\u7535\u8111"
,shops:[{key:107, shop:"\u5929\u732b\u65d7\u8230\u5e97", price: "\uffe5" + 3500}
		,{key:108, shop:"\u4e2d\u56fd\u4e9a\u9a6c\u900a", price: "\uffe5" + 1200}
		,{key:109, shop:"\u82cf\u5b81\u6613\u8d2d", price: "\uffe5" + 1000}]}];

export default class SearchResult extends Component<{}> {
	constructor(props) {
		super(props);
		this.state={
			list : itemDate,
			generalSelected: true,
			priceSelected: false,
			upSort: true,
			firstCount: 1,
		}
	}

	static navigationOptions = {
		tabBarLabel: '收藏',
	}

	_onPressButton(id) {
		if (id == 1) {
			this.setState({
				list: itemDate,
				generalSelected: true,
				priceSelected: false,
			})
		} else {
			if (this.state.firstCount == 1) {
				this.setState({
					list: itemDate2,
					generalSelected: false,
					priceSelected: true,
					upSort: this.state.upSort,
					firstCount: 2
				})
			} else {
				this.setState({
					list: itemDate2,
					generalSelected: false,
					priceSelected: true,
					upSort: !this.state.upSort,
				})				
			}
		}
	}

	render() {
		// 选中价格时进行排序
		const iconName = this.state.upSort ? "sort-up" : "sort-down";

		// 排序图标样式
		const style_icon = this.state.upSort ? styles.icon_up : styles.icon_down;
		
		if (this.state.priceSelected) {
			if (this.state.upSort) {
				// 升序排序
				this.state.list.sort((a, b) => a.shops[0].price < b.shops[0].price ? -1 : 1);
			} else {
				// 降序排序
				this.state.list.sort((a, b) => a.shops[0].price < b.shops[0].price ? 1 : -1);
			}
		}

		// 设置标签选中时颜色
		const style_color = this.state.generalSelected ? styles.tab_color_select : styles.tab_color_normal;
		const style_pcolor = this.state.priceSelected ? styles.tab_color_select : styles.tab_color_normal;

		const itemsList = this.state.list.map((elem, index) => {
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
				<View style={styles.topBox}>
					<TouchableOpacity style={styles.topBack} >
						<Image style={styles.backImg} source={Images.back} />
					</TouchableOpacity>
					<View style={styles.topSearch}>
						<View style={styles.searchSection}>
							<View style={styles.searchImgBox}>
								<Image source={Images.search} style={styles.searchImg} />
							</View>
							<TextInput style={styles.flex85} placeholder="请输入商品关键字" underlineColorAndroid= 'transparent'/>
						</View>
					</View>
				</View>

				<View style={[styles.topBox, styles.sortBox]}>
					<TouchableOpacity onPress={() => this._onPressButton(1)}>
						<Text style={[styles.sort, style_color]}>综合</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this._onPressButton(2)}>
						<View style={styles.tab}>
							<Text style={[styles.sort, style_pcolor]}>价格</Text><IconFA style={[style_icon, style_pcolor]} size={15} name = {iconName} />
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.flex85}>
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
	topBox: {
		height: Util.size.width/10,
		marginTop: Util.size.width/50,
		flexDirection: 'row',
	},
	topBack: {
		flex: 0.1,
	},
	backImg: {
		marginLeft: Util.size.width/40,
		marginTop: Util.size.width/70,
	},
	topSearch: {
		flex: 0.9
	},
	searchSection: {
		marginRight: Util.size.width/20,
		borderRadius: 5,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
	},
	searchImgBox: {
		flex: 0.15,
	},
	searchImg: {
		marginTop: Util.size.width/33,
		marginLeft: Util.size.width/15,
	},
	flex85: {
		flex: 0.85,
	},
	sortBox: {
		backgroundColor: '#FFFFFF',
		flex:0.05
	},
	sort: {
		fontSize: 13,
		marginLeft:Util.size.width/3
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
	tab_color_normal: {
        color: "grey"
    },
    tab_color_select: {
        color: "#dc143c"
	},
	tab: {
		flexDirection: 'row'
	},
	icon_up: {
		paddingTop: 5
	},
	icon_down: {
		paddingBottom: 5
	}
});