import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';

import HttpService from '../Services/HttpService';

class CategroyScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '分类',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-add' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    )
  };
//
  componentDidMount() {
    // this.props.dispatch(this._fetchHomeData());
    this._fetchHomeData();
  }

  render() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }

  _fetchHomeData() {
    // return (dispatch) => {
      HttpService.get('http://taiemao.com/index.php?route=app/home')
                 .then((value) => {
                    // dispatch({
                    //   data: result,
                    // });
                 })
                //  .catch((reason) => {

                //  });
                
      // new Promise((resolve, reject) => {
      //   fetch(url, {
      //     method: 'get',
      //     // headers: new Headers({
      //     //   'Content-Type': 'application/x-www-form-urlencoded',
      //     // }),
      //     // body: JSON.stringify(params),
      //   })
      //   .then((response) => {
      //     if (response.ok) {
      //       return response.json();
      //     } else {
      //       reject('服务器错误!');
      //     }
      //   })
      //   .then(data => {
      //     // data就是我们请求的repos
      //     console.log(data)
      //   });
      // });
    }
  // }
}

export default CategroyScreen