import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgb(246,249,248)'},
  content: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    marginVertical: 8,
    color: '#000',
  },
  textTitle: {
    fontWeight: 'bold',
  },
  idTransactionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  idTransactionIcon: {
    marginLeft: 4,
    transform: [{scaleX: -1}],
  },
  separatorOne: {
    height: 2,
    width: '120%',
    backgroundColor: 'rgb(246,249,248)',
    marginHorizontal: -20,
  },
  detailTransactionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
  },
  separatorTwo: {
    height: 2,
    width: '120%',
    backgroundColor: 'rgb(232,232,232)',
    marginHorizontal: -20,
  },
  detailBottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  detailText: {
    minWidth: 100,
  },
  timeCreateText: {
    marginTop: 20,
  },
  senderBankContainer: {
    marginTop: 30,
  },
  closeButton: {
    color: 'rgb(229,113,75)',
  },
});
