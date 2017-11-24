import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from '../Screens/HomeScreen';
import CategroyScreen from '../Screens/CategroyScreen';
import WishListScreen from '../Screens/WishListScreen';
import CustomerScreen from '../Screens/CustomerScreen';
import ProductsScreen from '../Screens/ProductsScreen';
import ProductScreen from '../Screens/ProductScreen';

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
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: true,
  lazy: true,
  initialRouteName: '',
  backBehavior: 'none',
  tabBarOptions: {
    // style: {
    //     height:49
    // },
    // activeBackgroundColor:'white',
    // activeTintColor:'#4ECBFC',
    // inactiveBackgroundColor:'white',
    // inactiveTintColor:'#aaa',
    showIcon: true,
    showLabel: true
  }
});

const Stacks = StackNavigator({
  Main: {screen: Tabs},
  Products: {screen: ProductsScreen},
  Product: {screen: ProductScreen},
});

export default Stacks
