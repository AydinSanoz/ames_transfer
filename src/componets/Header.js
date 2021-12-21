import React from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';
import {styles} from './styles';

const Header = () => {
  const image = require('../Assets/ames.jpg');
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('window').height * 0.4,
        }}></ImageBackground>
    </View>
  );
};

export default Header;
