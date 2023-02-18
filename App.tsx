import React from 'react';
import { View, Text } from 'react-native';
import ListTodos from './src/screens/components/ListTodos';
const App = () => {
  return (
    <View style={{ flex: 1, }}>
      
      <ListTodos />
    </View>
  );
};

export default App;