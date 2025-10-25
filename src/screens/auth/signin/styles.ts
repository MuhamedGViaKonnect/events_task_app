import Colors from '@common/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  innerContainer: {
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  subHeaderTxt: {
    fontSize: 16,
    color: '#777',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    // marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  forgotTxt: {
    color: Colors.primary,
    marginTop: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  footerTxt: {
    color: Colors.gray,
  },
  signupTxt: {
    color: Colors.primary,
    fontWeight: '600',
  },
  errorText: { color: Colors.red, marginTop: 5, alignSelf: 'flex-start' },
});
