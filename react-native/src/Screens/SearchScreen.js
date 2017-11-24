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
import NavigationSearch from '../Component/NavigationSearch'

export default class Search extends Component<{}> {
    static navigationOptions = {
        visible: true,
        headerTitle: <NavigationSearch/>,
    }
    
    render() {
      const { navigate } = this.props.navigation;
      return (
        <ScrollView>
			<View style={styles.dor}>
				<Text style={{fontSize: 20}}>热门搜索</Text>
			</View>
			<View style={styles.hot}>
				<View style={styles.hots}>
					<TouchableHighlight>
					<Text numberOfLines={1} style={styles.font}>iphon 7</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.hots}>
					<TouchableHighlight>
					<Text numberOfLines={1} style={styles.font}>小米 Note3</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.hots}>
					<TouchableHighlight>
					<Text numberOfLines={1} style={styles.font}>iphon 8</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.hots}>
					<TouchableHighlight>
					<Text numberOfLines={1} style={styles.font}>iphon x</Text>
					</TouchableHighlight>
				</View>
			</View>
        </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
	dor: {
		paddingTop: Util.size.width/20,
		paddingLeft: Util.size.width/20,
	},
	hot: {
		paddingTop: Util.size.width/30,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	hots: {
		width: Util.size.width/5,
		height: Util.size.width/15,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#B8B8B8',
		backgroundColor: '#B8B8B8',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	font: {
		paddingLeft: Util.size.width/50,
	}

})
