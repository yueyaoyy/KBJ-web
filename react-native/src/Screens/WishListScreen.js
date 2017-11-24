import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';

class WishListScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '收藏',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-add' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    return (
      <View>
        <Text>收藏</Text>
      </View>
    );
  }
}

export default WishListScreen