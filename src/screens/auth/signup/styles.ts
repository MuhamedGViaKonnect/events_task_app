import Colors from '@common/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 6,
  },
  subHeaderTxt: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.black,
    // marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.gray + '33',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  buttonTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  footerTxt: {
    fontSize: 15,
    color: Colors.gray,
  },
  signupTxt: {
    color: Colors.primary,
    fontWeight: '600',
  },
  errorText: { color: Colors.red, marginTop: 5, alignSelf: 'flex-start' },
});

export default styles;
