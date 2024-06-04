import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

const DashboardScreen = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Fetch quotes from the Quotable API
    axios
      .get('https://api.quotable.io/quotes?limit=50') // Adjust the limit as needed
      .then(response => {
        setQuotes(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.subtitle}>{item.author}</Text>
      <Text style={styles.body}>{item.content}</Text>
    </View>
  );

  return (
    <FlatList
      data={quotes}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#F4D0FA',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#574E59',
  },
  body: {
    fontSize: 14,
    color: '#574E59',
  },
});

export default DashboardScreen;
