import React from 'react';
import {StyleSheet, TextInput, View, Image } from 'react-native';

const SearchBar = () => {
  const [text, onChangeText] = React.useState('');

  return (
        <View style={styles.container}>
          <Image source={require('../assets/SearchIcon.png')} style={styles.icon} />
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"flex-end",
    width: 343,
    height: 44,
    backgroundColor: '#F8F9FE',
    borderRadius: 24,

  },
  input: {
    flex: 1,
    marginBottom: 12,
    marginTop:12,
    marginLeft:16,
    alignSelf: 'center'
  },
  icon: {
    width: 16,
    height: 16,
    marginTop: 16,
    marginRight: 16,
    marginBottom: 12,
    marginLeft: 16,
  }
});

export default SearchBar;
