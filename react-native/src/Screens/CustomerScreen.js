import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';

class CustomerScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '用户',
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
        <Text>用户</Text>
      </View>
    );
  }
}

export default CustomerScreen