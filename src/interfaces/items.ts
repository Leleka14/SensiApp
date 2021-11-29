import {ImageRequireSource} from 'react-native';

export interface IItemsState {
  data: Array<IItem> | [];
}

export interface IItem {
  title: string;
  description: string;
  price: number;
  image: ImageRequireSource;
  category: string;
}

export enum ItemsActionTypes {
  INIT_STATE = 'INIT_STATE',
}
