import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '@common/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  innerContainer: {
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 70 : 20,
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  flatListContent: {
    paddingBottom: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  cardContainer: {
    width: width - 32,
    marginBottom: 12,
  },
});

export default styles;
