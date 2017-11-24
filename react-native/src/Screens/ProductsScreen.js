import React from 'react';
import { View, Button } from 'react-native';

class ProductsScreen extends React.Component {
  static navigationOptions = {
    title: '商品列表',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          title="Go to Product"
          onPress={() =>
            navigate('Product', { value: '' })
          }
        />
      </View>
    );
  }
}

export default ProductsScreen