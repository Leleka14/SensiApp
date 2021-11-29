import React from 'react';
import {
  Image,
  ImageRequireSource,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

interface IProps {
  image: ImageRequireSource;
  title: string;
  description: string;
  price: number;
  onItemPress(item: object): void;
}

export default ({onItemPress, title, image, description, price}: IProps) => {
  const s = styles();
  return (
    <TouchableOpacity style={s.singleItem} onPress={onItemPress}>
      <Image source={image} style={s.image} resizeMode="cover" />
      <View style={s.body}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.price}>{price}$</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
