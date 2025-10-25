import Colors from '@common/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 12,
    overflow: 'hidden',
    width: '90%',
    alignSelf: 'center',
    height: 270,
    borderWidth: 1,
    borderColor: Colors.gray + '33',
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  placeholder: {
    backgroundColor: Colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
  },
  placeholderText: {
    color: Colors.gray,
    fontSize: 12,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
  },
  description: {
    // padding: 12,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 4,
  },
  location: {
    fontSize: 13,
    color: Colors.gray,
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: Colors.gray_999,
  },
  registerButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  registerButtonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default styles;
