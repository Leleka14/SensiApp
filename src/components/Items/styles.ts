import {scale, ScaledSheet} from 'react-native-size-matters';

export default () =>
  ScaledSheet.create({
    containerWrapper: {
      flex: 1,
      marginTop: '10@s',
    },
    container: {
      // flex: 1,
      backgroundColor: '#FFF',
    },

    list: {
      flex: 1,
    },
    title: {
      color: '#000',
      textAlign: 'center',
      marginTop: '5@s',
      fontSize: '20@s',
      fontWeight: '600',
    },
    separator: {
      height: '4@s',
      backgroundColor: '#F4F7FB',
    },
  });
