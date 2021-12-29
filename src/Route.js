import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {types} from '@babel/core';
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
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
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
            <Stack.Navigator>
              <Stack.screen name="Login" component={SignIn} />
              <Stack.screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
