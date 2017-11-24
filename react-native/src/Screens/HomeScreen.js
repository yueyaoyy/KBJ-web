import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-add' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
        <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Go to Products`}
          onPress={() =>
            navigate('Products', { value: '' })
          }
        />
    );
  }
}

export default HomeScreen