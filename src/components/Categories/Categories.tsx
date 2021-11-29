import React from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SingleCategory from '../SingleCategory/SingleCategory';
import styles from './styles';

interface IProps {
  categories: Array<object>;
  onCategorySelect(value: string): void;
}

export default ({onCategorySelect, categories}: IProps) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);

  const renderItem = ({item}) => {
    return (
      <SingleCategory
        onCategorySelect={() => onCategorySelect(item.title.toLowerCase())}
        image={item.image}
        title={item.title}
        isActive={item.active}
      />
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      horizontal
      contentContainerStyle={s.container}
      style={s.list}
      showsHorizontalScrollIndicator={true}
      bounces={false}
    />
  );
};
