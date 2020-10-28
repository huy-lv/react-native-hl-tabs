import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HLTabs from 'react-native-hl-tabs';

export default function App() {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const titles: string[] = ['Tab1', 'Tab2 with very long text', 'Tab3'];

  const onPressTab = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={{ margin: 20 }}>Example: </Text>
      <HLTabs
        titles={titles}
        onPress={onPressTab}
        selectedIndex={selectedIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
