# react-native-hl-tabs

A beautiful tab for react native
![alt text](https://raw.githubusercontent.com/huy-lv/react-native-hl-tabs/master/demo.png)

## Installation

```sh
npm install react-native-hl-tabs
```

or

```
yarn add react-native-hl-tabs
```

## Usage

```js
import HLTabs from 'react-native-hl-tabs';

// ...

const [selectedIndex, setSelectedIndex] = React.useState < number > 0;

const titles: string[] = ['Tab1', 'Tab2 with very long text', 'Tab3'];

const onPressTab = (index: number) => {
  setSelectedIndex(index);
};

return (
  <View>
    <HLTabs
      titles={titles}
      onPress={onPressTab}
      selectedIndex={selectedIndex}
    />
  </View>
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
