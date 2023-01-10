import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';

export default CurrentWeather = ({ weather }) => {
    return (
      <View 
        style={[
          styles.weatherContainer,
          { backgroundColor: "rgba(0, 0, 0, 0.6)" }
        ]}
      >
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            size={80}
            name={weatherConditions[weather.weatherCondition.main].icon}
            color={'#fff'}
          />
          <Text style={styles.tempText}>{weather.temp}˚C</Text>
        </View>
        <Text style={styles.city}>{weather.city}</Text>
        <Text style={styles.temperature}>{weather.feels_like}</Text>
        <Text style={styles.temperature}>{weather.temp}</Text>
        <Text style={styles.temperature}>{weather.weatherCondition.description}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    weatherContainer: {
      flex: 1,
      width: "100%", 
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContainer: {

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