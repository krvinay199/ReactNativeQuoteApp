import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.option}>Account</Text>
      <Text style={styles.option}>Notification</Text>
      <Text style={styles.option}>Display</Text>
      <Text style={styles.option}>Privacy and Security</Text>
      <Text style={styles.option}>Logout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor:'white',
  },
  option: {
    fontSize: 18,
    marginVertical: 10,
    color:'black',
    borderBottomWidth: 1,
    borderBottomColor:'black'
  },
});

export default SettingsScreen;
