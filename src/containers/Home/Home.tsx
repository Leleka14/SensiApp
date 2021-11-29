import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Categories from '../../components/Categories/Categories';
import Items from '../../components/Items/Items';
import Search from '../../components/Search/Search';
import {IItem} from '../../interfaces/items';
import styles from './styles';

interface IProps {
  onSearch(value: string): void;
  onCategorySelect(value: string): void;
  items: [] | Array<IItem>;
  categories: Array<object>;
}

export default ({onSearch, onCategorySelect, items, categories}: IProps) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);

  return (
    <View style={s.container}>
      <Search onSearch={onSearch} />
      <Categories onCategorySelect={onCategorySelect} categories={categories} />
      <Items items={items} onItemPress={() => {}} />
    </View>
  );
};
