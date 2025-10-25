import Colors from '@common/colors';
import { ScaleHeight, ScaleWidth } from '@common/fitSize';
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
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  splashImg: {
    width: ScaleWidth(60),
    height: ScaleHeight(50),
  },
});

export default styles;
