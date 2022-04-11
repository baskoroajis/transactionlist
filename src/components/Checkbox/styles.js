import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    color: '#000',
  },
  image: size => {
    return {width: size, height: size, tintColor: 'rgb(229,113,75)'};
  },
});
