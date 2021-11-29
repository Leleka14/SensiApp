import {scale, ScaledSheet} from 'react-native-size-matters';

export default insets =>
  ScaledSheet.create({
    container: {
      // flex: 1,
      // minHeight: '200@s',
      backgroundColor: '#3A75C1',
      paddingTop: insets.top + scale(30),
      paddingHorizontal: '20@s',
      paddingBottom: '40@s',
    },
    input: {
      backgroundColor: '#FFF',
      paddingLeft: '20@s',
      paddingRight: '10@s',
      paddingVertical: '10@s',
      borderRadius: '2@s',
      fontSize: '15@s',
      color: '#000',
    },
  });
