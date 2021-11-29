import React from 'react';
import {TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

interface IProps {
  onSearch(value: string): void;
}

export default ({onSearch}: IProps) => {
  const insets = useSafeAreaInsets();

  const s = styles(insets);
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder={'Czego szukasz?'}
        placeholderTextColor="gray"
        onChange={e => onSearch(e.nativeEvent.text)}
      />
    </View>
  );
};
