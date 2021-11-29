import {ScaledSheet} from 'react-native-size-matters';

export default insets =>
  ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ECF1FA',
      // paddingTop: insets.top,
    },
  });
