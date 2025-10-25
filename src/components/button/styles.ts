import Colors from '@common/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default styles;
