import {Platform} from 'react-native';

export const styles = {
  container: {
    marginTop: Platform.OS === 'android' ? 40 : 80,
    backgroundColor: 'rgb(246,249,248)',
  },
  modal: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  list: {
    marginTop: 30,
  },
  contentList: {
    paddingBottom: 60,
  },
};
