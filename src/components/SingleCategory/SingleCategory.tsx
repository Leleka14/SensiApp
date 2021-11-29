import React from 'react';
import {Image, ImageRequireSource, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface IProps {
  image: ImageRequireSource;
  title: string;
  isActive: boolean;
  onCategorySelect(): void;
}

export default ({onCategorySelect, title, image, isActive}: IProps) => {
  const s = styles();
  return (
    <TouchableOpacity style={s.singleCategory} onPress={onCategorySelect}>
      <Image
        source={image}
        style={[s.image, {borderColor: isActive ? '#00C85F' : '#FFF'}]}
        resizeMode="cover"
      />
      <Text style={s.title}>{title}</Text>
    </TouchableOpacity>
  );
};
