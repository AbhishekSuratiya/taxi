import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {MD2Colors, PaperProvider} from 'react-native-paper';
import Navigation from './App/Containers/Navigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <PaperProvider>
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigation />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
  },
  root: {
    backgroundColor: MD2Colors.indigo50,
    flex: 1,
  },
});

export default App;
