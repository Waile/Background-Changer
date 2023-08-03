import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [circleColor, setCircleColor] = useState('#ffffff');
  const [squareColor, setSquareColor] = useState('#ffffff');
  const [triangleColor, setTriangleColor] = useState('#ffffff');
  const [rectangleColor, setRectangleColor] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    let circleColor = '#';
    let squareColor = '#';
    let triangleColor = '#';
    let rectangleColor = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      circleColor += hexRange[Math.floor(Math.random() * 16)];
      squareColor += hexRange[Math.floor(Math.random() * 16)];
      triangleColor += hexRange[Math.floor(Math.random() * 16)];
      rectangleColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
    setCircleColor(circleColor)
    setSquareColor(squareColor)
    setTriangleColor(triangleColor)
    setRectangleColor(rectangleColor)
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <View style={[styles.circle, { backgroundColor: circleColor }]}></View>
        <View style={[styles.square, { backgroundColor: squareColor }]}></View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.rectangle, { backgroundColor: rectangleColor }]}></View>
        <View style={[styles.triangle, { borderBottomColor: triangleColor }]}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4d',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: '10%',
  },
  square: {
    height: 100,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: '10%',
  },
  rectangle: {
    height: 100,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: '10%',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 75,
    borderRightWidth: 75,
    borderBottomWidth: 150,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
  },
});

export default App;
