import React, { Component } from 'react';
import Util from '../Utils/Utils';
import Goods from '../Component/Goods'
import Catalog from '../Component/Catalog'
import { StyleSheet, Text, View } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';

/**
 * 分类画面
 */
class CategroyScreen extends React.Component {

	constructor(props) {
		super(props)
	}
  
	static navigationOptions = {
		header:null,
		tabBarLabel: '分类',
		tabBarIcon: ({ tintColor, focused }) => (
			<IconFA
			name={'search'}
			size={26}
			style={{ color: tintColor }}
			/>
		)
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<View style={styles.nav}>
					<View style={styles.topBox}>
						<View style={styles.searchSection}>
							<Text 
								style={styles.searchInput}
								onPress={() => navigate('Search')}>
								<IconFA size={18} name="search" />{"   "}请输入商品关键字
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.contentContainer}>
					<Catalog />
					<Goods />
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#efede8'
	},
	nav: {
		flex: 0.1,
		backgroundColor: '#eef0f3'
	},
	topBox: {
		height: Util.size.width/12,
		marginTop: Util.size.height/40,
		marginLeft: Util.size.width/30,
		flexDirection: 'row',
	},
	searchSection: {
		flex: 1,
		marginRight: Util.size.width/30,
		borderRadius: 5,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
	},
	searchInput: {
		flex: 0.85,
		marginLeft: Util.size.width/30,
		paddingTop: Util.size.height/70
	},
	contentContainer: {
		flex: 0.9,
		flexDirection: 'row',
	}
})

export default CategroyScreen