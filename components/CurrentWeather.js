import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default CurrentWeather = ({ weather }) => {
    return (
      <View>
        <Text style={styles.city}>{weather.city}</Text>
        <Text style={styles.temperature}>{weather.feels_like}</Text>
        <Text style={styles.temperature}>{weather.temp}</Text>
        <Text style={styles.temperature}>{weather.weatherCondition.description}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    city: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
    },
    temperature: {
        fontSize: 22,
        textAlign: "center",
    }
  });