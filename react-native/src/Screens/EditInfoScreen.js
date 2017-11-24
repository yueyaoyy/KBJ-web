import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ListView,
} from 'react-native';
import moment from 'moment';
import Util from '../Utils/Utils';
import {PullList} from 'react-native-pull';
import Refresh from '../Component/Refresh';

export default class extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
            <Refresh renderRow={this.renderRow.bind(this)}/>
        );
    }

    renderRow(item, sectionID, rowID, highlightRow) {
      return (
          <View style={{height: 50, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
              <Text>{item.title}</Text>
          </View>
      );
    }
}