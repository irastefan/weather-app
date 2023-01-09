import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';
import { API_KEY } from './utils/APIKey';
import CurrentWeather from './components/CurrentWeather.js';

export default function App() {

  const [weather, setWeather] = React.useState(null);

  const fetchWeather = (city) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        setWeather({
          feels_like: json.main.feels_like,
          temp: json.main.temp,
          weatherCondition: json.weather[0],
          wind: json.wind,
          humidity: json.humidity,
          isRain: json.pop,
          icon: json.icon,
          city: json.name,
        });
      });
  }

  React.useEffect(() => {
    fetchWeather('Tel Aviv');
  }, []);

  return (
    <View style={styles.container}>
      {weather ? <CurrentWeather weather={weather} /> : <Text>'Loading...'</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
