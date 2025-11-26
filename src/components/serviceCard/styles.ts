import Colors from '@common/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: Colors.white,
    borderRadius: 12,
    elevation: 3,
    gap: 12,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  placeholderLogo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 10,
    color: Colors.gray,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.black,
  },
  details: {
    fontSize: 13,
    color: Colors.gray,
    marginTop: 4,
  },
  fees: {
    fontSize: 13,
    color: '#2980b9',
    marginTop: 6,
    fontWeight: '600',
  },
});

export default styles;
