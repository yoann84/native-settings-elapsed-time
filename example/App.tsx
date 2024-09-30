import { StyleSheet, Text, View } from 'react-native';

import * as NativeSettingsElapsedTime from 'native-settings-elapsed-time';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{NativeSettingsElapsedTime.hello()}</Text>
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
