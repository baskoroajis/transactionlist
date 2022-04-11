import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 55,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
    alignItems: 'center',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  searchIcon: {
    marginRight: 4,
  },
  input: {
    backgroundColor: '#FFF',
    paddingLeft: 16,
    paddingRight: 8,
    borderRadius: 3,
    height: 60,
  },
  inputStyle: {
    fontSize: 16,
  },
  labelStyle: {
    fontSize: 18,
    color: '#232',
  },
  rightIconContainer: {
    marginRight: 4,
    flexDirection: 'row',
    height: '50%',
    alignItems: 'center',
  },
  downIcon: {
    marginRight: 4,
  },
  sortText: {
    color: 'rgb(229,113,75)',
    fontWeight: 'bold',
  },
});
