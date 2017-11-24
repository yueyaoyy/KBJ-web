import React from 'react';
import { ToastAndroid } from 'react-native';

class HttpService extends React.Component {

  //get请求
  static get(url, params) {
    if (params) {
      let paramsArray = [];

      // for(var item of params.entries()){
      //   paramsArray.push(item[0]+'='+encodeURIComponent(item[1]));
      // }
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));

      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }
    }

    return this.request(url, 'get');
  }

  //post请求
  static post(url, params) {
    return this.request(url, 'post', params);
  }

  static request(url, method, params) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject('服务器错误!');
        }
      })
      .then((json) => {
        console.log(json);
        // if (json.code === '1000') { //网络请求成功
        // alert(json.data.status);
          resolve(json);
        // } else {
        //   reject(json.msg);
        // }
      })
      .catch((error) => {
        reject('服务器错误!');
      });
    });
  }
}

export default HttpService