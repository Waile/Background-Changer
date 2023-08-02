
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(): JSX.Element {


  return (
    <>
      <StatusBar backgroundColor={"#000000"} />
      <View style={[styles.container]}>
        <TouchableOpacity>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: "#6A1B4d",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionButtonText: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
});

export default App;
