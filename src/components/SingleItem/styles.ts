import {scale, ScaledSheet} from 'react-native-size-matters';

export default () =>
  ScaledSheet.create({
    singleItem: {
      // width: '110@s',
      // alignItems: 'center',
      // backgroundColor: 'red',
      marginHorizontal: '10@s',
      paddingVertical: '30@s',
      flexDirection: 'row',
    },
    image: {
      width: '120@s',
      height: '120@s',
      borderRadius: '3@s',
    },
    body: {
      paddingLeft: '15@s',
      justifyContent: 'space-around',
    },
    title: {
      color: '#000',
    },
    price: {
      color: 'red',
    },
    description: {
      color: '#000',
    },
  });
