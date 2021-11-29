import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {IItem} from '../../interfaces/items';
import SingleItem from '../SingleItem/SingleItem';
import styles from './styles';

interface IProps {
  items: [] | Array<IItem>;
  onItemPress(item: object): void;
}

export default ({items, onItemPress}: IProps) => {
  const s = styles();
  const renderItem = ({item}) => {
    return (
      <SingleItem
        onItemPress={() => onItemPress(item)}
        image={item.image}
        title={item.title}
        description={item.description}
        price={item.price}
      />
    );
  };

  const renderHeader = () => {
    return <Text style={s.title}>Najlepsze oferty</Text>;
  };

  const renderSeparator = () => {
    return <View style={s.separator} />;
  };

  return (
    <View style={s.containerWrapper}>
      <FlatList
        data={items}
        renderItem={renderItem}
        contentContainerStyle={s.container}
        style={s.list}
        showsHorizontalScrollIndicator={true}
        bounces={false}
        scrollEnabled
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};
