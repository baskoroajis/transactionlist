export const styles = {
  container: {
    marginTop: 40,
    backgroundColor: 'rgb(246,249,248)',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  item: {
    borderRadius: 5,
    backgroundColor: '#FFF',
    margin: 8,
  },
  itemInfoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    paddingLeft: 25,
  },
  itemLeftView: status => {
    return {
      backgroundColor:
        status === 'SUCCESS' ? 'rgb(110,180,136)' : 'rgb(229,113,75)',
      height: '100%',
      width: 10,
      left: 0,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    };
  },
  statusContainer: status => {
    return {
      backgroundColor: status === 'SUCCESS' ? 'rgb(110,180,136)' : '#FFF',
      borderColor:
        status === 'SUCCESS' ? 'rgb(110,180,136)' : 'rgb(229,113,75)',
      borderWidth: status === 'SUCCESS' ? 0 : 2,
      paddingHorizontal: 8,
      paddingVertical: 5,
      borderRadius: 7,
    };
  },
  textStatus: status => {
    return {
      color: status === 'SUCCESS' ? '#FFF' : '#000',
      fontWeight: 'bold',
    };
  },
  text: {
    marginVertical: 3,
    color: '#000',
  },
  amountDescription: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
};
