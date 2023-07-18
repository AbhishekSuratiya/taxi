import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <PaperProvider>
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
  },
  root: {
    backgroundColor: 'red',
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
});

export default App;
