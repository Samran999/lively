import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FriendScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        value={searchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});

export default FriendScreen;
