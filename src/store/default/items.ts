import {IItem} from '../../interfaces/items';

export const defaultItems: Array<IItem> = [
  {
    title: 'Volvo',
    description: 'Nice car',
    price: 60.0,
    image: require('../../assets/images/volvo.jpeg'),
    category: 'auto',
  },
  {
    title: 'Apartment',
    description: 'Big apartment',
    price: 100.0,
    image: require('../../assets/images/apartment.jpeg'),
    category: 'apartments',
  },
  {
    title: 'Private house',
    description: 'Big mansion',
    price: 250.0,
    image: require('../../assets/images/house.jpeg'),
    category: 'houses',
  },
  {
    title: 'Suit',
    description: 'Blue suit',
    price: 10.0,
    image: require('../../assets/images/suit.jpeg'),
    category: 'clothes',
  },
];
