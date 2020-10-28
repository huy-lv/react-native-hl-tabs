import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';

type HLTabsProps = {
  titles: string[];
  selectedIndex?: number;
  activeColor?: string;
  inactiveColor?: string;
  tintColor?: string;
  inactiveTintColor?: string;
  seperatorColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress: (index: number) => void;
};

const HLTabs: React.FC<HLTabsProps> = ({
  titles,
  selectedIndex,
  activeColor,
  inactiveColor,
  tintColor,
  inactiveTintColor,
  seperatorColor,
  style,
  textStyle,
  onPress,
}) => {
  const renderTabItem = (item: string, index: number) => {
    const onPressTab = () => onPress(index);

    const seperatorShouldHide =
      selectedIndex === index || selectedIndex === index - 1 || index === 0;

    return (
      <View key={index} style={styles.tabItemContainer}>
        <View
          style={[
            styles.seperator,
            {
              backgroundColor: seperatorShouldHide
                ? inactiveColor
                : seperatorColor,
            },
          ]}
        />
        <TouchableOpacity
          style={[
            styles.touchContainer,
            {
              backgroundColor:
                selectedIndex === index ? activeColor : inactiveColor,
            },
          ]}
          onPress={onPressTab}
        >
          <Text
            style={[
              styles.tabItemText,
              textStyle,
              {
                color: selectedIndex === index ? tintColor : inactiveTintColor,
              },
            ]}
            numberOfLines={1}
          >
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={[styles.tabContainer, { backgroundColor: inactiveColor }, style]}
    >
      {titles.map(renderTabItem)}
    </View>
  );
};

HLTabs.defaultProps = {
  selectedIndex: 0,
  activeColor: 'white',
  inactiveColor: '#E4E5F0',
  tintColor: 'black',
  inactiveTintColor: '#82869E',
  seperatorColor: '#BCBFD6',
};

export default HLTabs;

const styles = StyleSheet.create({
  tabItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  seperator: {
    width: 1,
    height: 20,
  },
  touchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 7,
    margin: 2,
    marginRight: 3,
    flex: 1,
    justifyContent: 'center',
  },
  tabItemText: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  tabContainer: {
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
