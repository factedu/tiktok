import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet
} from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';



const App = () => {

  return (
    <SafeAreaView >
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentContainerStyle={styles.container} contentInsetAdjustmentBehavior="automatic">
        <WelcomeScreen/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    height:'100%',
  }
})

export default App;
