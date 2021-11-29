import {ScaledSheet} from 'react-native-size-matters';

export default insets =>
  ScaledSheet.create({
    container: {
      paddingVertical: '10@s',
      backgroundColor: '#FFF',
    },
    list: {
      paddingLeft: '10@s',
      backgroundColor: '#FFF',
      maxHeight: '150@s',
    },
  });
