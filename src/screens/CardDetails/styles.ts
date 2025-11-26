import { StyleSheet, Platform } from 'react-native';
import Colors from '@common/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 80 : 20,
    backgroundColor: Colors.white,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: Colors.primary,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    marginBottom: 15,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.gray,
  },
  value: {
    fontSize: 16,
    color: Colors.black,
    marginTop: 5,
  },
  calendarContainer: {
  marginTop: 20,
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: 10,
  elevation: 3,
},

selectedDateBox: {
  marginTop: 20,
  padding: 12,
  backgroundColor: "#eef9f2",
  borderRadius: 10,
},

selectedInfo: {
  fontSize: 16,
  fontWeight: "500",
  color: "#0E9F6E",
},

});
