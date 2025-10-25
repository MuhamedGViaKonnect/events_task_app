import Colors from '@common/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.black,
  },
  infoTxt: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 8,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default styles;
