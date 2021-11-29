import {scale, ScaledSheet} from 'react-native-size-matters';

export default () =>
  ScaledSheet.create({
    singleCategory: {
      width: '110@s',
      alignItems: 'center',
      // backgroundColor: 'red',
      marginHorizontal: '10@s',
    },
    image: {
      borderRadius: '50@s',
      width: '80@s',
      height: '80@s',
      marginVertical: '15@s',
      borderWidth: '2@s',
    },
    title: {
      color: '#000',
    },
  });
