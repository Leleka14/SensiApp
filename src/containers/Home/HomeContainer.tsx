import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Home from './Home';
const defaultCategories = [
  {
    image: require('../../assets/images/cars.jpeg'),
    title: 'Auto',
    active: false,
  },
  {
    image: require('../../assets/images/apartments.jpeg'),
    title: 'Apartments',
    active: false,
  },
  {
    image: require('../../assets/images/clothes.jpeg'),
    title: 'Clothes',
    active: false,
  },
  {
    image: require('../../assets/images/houses.jpeg'),
    title: 'Houses',
    active: false,
  },
];

export default () => {
  const [categories, setCategories] = useState(defaultCategories);
  const [activeCategories, setActiveCategories] = useState([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const {items} = useSelector(({itemsReducer}: RootState) => ({
    items: itemsReducer?.data.filter(
      el =>
        (el.title.includes(searchValue) ||
          el.description.includes(searchValue)) &&
        (activeCategories.length
          ? activeCategories.includes(el.category)
          : true),
    ),
  }));

  const onSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const onCategorySelect = useCallback(
    (value: string) => {
      setCategories(prev => {
        const newArr = [...prev].map(el =>
          el.title.toLowerCase() === value ? {...el, active: !el.active} : el,
        );
        return newArr;
      });
    },
    [categories],
  );

  useEffect(() => {
    const activeCats = categories
      .filter(el => el.active)
      .map(el => el.title.toLowerCase());

    setActiveCategories(activeCats);
  }, [categories]);

  return (
    <Home
      onSearch={onSearch}
      items={items}
      onCategorySelect={onCategorySelect}
      categories={categories}
      // searchValue={searchValue}
    />
  );
};
