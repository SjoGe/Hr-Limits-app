import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculateLimits = () => {
    const ageNum = parseInt(age, 10);
    if (!isNaN(ageNum) && ageNum > 0 && ageNum < 120) {
      const maxHeartRate = 220 - ageNum;
      const lowerLimit = (maxHeartRate * 0.65).toFixed(0);
      const upperLimit = (maxHeartRate * 0.85).toFixed(0);
      setLimits(`${lowerLimit}-${upperLimit}`);
    } else {
      setLimits('');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
        placeholder="Enter your age"
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button title="Calculate" onPress={calculateLimits} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  field: {
    fontSize: 18,
  },
});
