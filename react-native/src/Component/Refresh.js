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

/**
 * 下拉刷新
 */
export default class Refresh extends Component {
	constructor(props) {
        super(props);
        this.dataSource = [{
            id: 0,
            title: `this is the first.`,
        }];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.props.renderRow;
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
        this.onPullOk = this.onPullOk.bind(this);
    }

    /**
     *  顶部刷新，显示不同的画面
     */
	topIndicatorRender(pulling, pullok, pullrelease) {
        const date = moment().format('YYYY-MM-DD HH:mm:ss');
        const hide = {position: 'absolute', left: -10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);

		return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                 height: 60,}}>
                <ActivityIndicator size="small" color="gray" />
                    <Text ref={(c) => {this.txtPulling = c;}}>下拉中......</Text>
                    <Text ref={(c) => {this.txtPullok = c;}}>刷新中......</Text>
                    <Text ref={(c) => {this.txtPullrelease = c;}}>加载中......</Text>
                    <Text>最后更新时间:</Text>
                    <Text ref={(e) => {this.date = e;}}>{this.state.date}</Text>   
            </View>
        );
	}

    render() {
        return (
            <View style={styles.container}>
                <PullList
                style={{}}
                onPullRelease={this.onPullRelease}
                topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
                dataSource={this.state.list}
                pageSize={5}
                initialListSize={5}
                renderRow={this.renderRow}
                onEndReached={this.loadMore}
                onEndReachedThreshold={60}
                renderFooter={this.renderFooter}
                onPullOk={this.onPullOk}
                    />
            </View>
        );
    }

     /**
     * 在pullrelease状态时候调用
     */
    onPullRelease(resolve) {
		//do something
		setTimeout(() => {
            resolve();
        }, 3000);
    }

    /**
     * 渲染头部
     */
    renderHeader() {
      return (
          <View style={{height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>This is header</Text>
          </View>
      );
    }

    /**
     * 判断是否加载结束，刷新状态提示的隐藏和显示
     */
    renderFooter() {
      if(this.state.nomore) {
          return null;
      }
      return (
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
              <ActivityIndicator />
              <Text >加载中</Text>
          </View>
      );
    }


    loadMore() {
        this.dataSource.push({
            id: 0,
            title: `begin to create data ...`,
        });
        for(var i = 0; i < 5; i++) {
            this.dataSource.push({
                id: i + 1,
                title: `this is ${i}`,
            })
        }
        this.dataSource.push({
            id: 6,
            title: `finish create data ...`,
        });
        setTimeout(() => {
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
        }, 1000);
    }

    /**
     * 拉倒那个临界点，就会调用该方法
     */
    onPullOk() {
        this.setState({
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }) 
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
});