/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {types} from '@babel/core';
import React from 'react';
import {Node} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './componets/Header';
import Section from './componets/Section';
import SignIn from './pages/SignIn';
import {styles} from './styles';
import SignUp from './pages/SignUp';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="scrollableAxes"
        style={backgroundStyle}>
        <Header />
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            },
          ]}>
          <Section title="Amerikan Estetik Otel Transfer"></Section>
          <SignIn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
