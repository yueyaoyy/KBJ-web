import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import CategroyScreen from '../Screens/CategroyScreen';
import WishListScreen from '../Screens/WishListScreen';
import CustomerScreen from '../Screens/CustomerScreen';
import SearchScreen from '../Screens/SearchScreen';
import EditInfoScreen from '../Screens/EditInfoScreen';
import SuggestionScreen from '../Screens/SuggestionScreen';
import AboutOursScreen from '../Screens/AboutOursScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import SearchResultScreen from '../Screens/SearchResultScreen';

const Tabs = TabNavigator({
	Home: {
		screen: HomeScreen
	},
	Categroy: {
		screen: CategroyScreen
	},
	WishList: {
		screen: WishListScreen
	},
	Customer: {
		screen: CustomerScreen
	},
}, 
{
	tabBarOptions: {
		activeTintColor: '#ea5252',
		inactiveTintColor: '#000',
		showIcon: true,
		showLabel: true,
		upperCaseLabel: false,
		pressColor: '#823453',
		pressOpacity: 0.8,
		style: {
			backgroundColor: '#fff',
			paddingBottom: 0,
			borderTopWidth: 0.5,
			borderTopColor: '#ccc',
		},
		labelStyle: {
			fontSize: 12,
			margin: 1,
		},
		indicatorStyle: { height: 0 }, 
		},
		tabBarPosition: 'bottom',
		swipeEnabled: false,
		animationEnabled: false,
		lazy: true,
		backBehavior: 'none',
});

const Stacks = StackNavigator({
	Main: {screen: Tabs},
	Login: {screen: LoginScreen},
	Search: {screen: SearchScreen},
	Register: {screen: RegisterScreen},
	EditInfo: {screen: EditInfoScreen},
	Suggestion: {screen: SuggestionScreen},
	AboutOurs: {screen: AboutOursScreen},
	SearchResult: {screen: SearchResultScreen},
});

export default Stacks
