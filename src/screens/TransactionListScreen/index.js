import Header from '../../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import FlatList from '../../components/FlatList';
import React, {useState, useEffect} from 'react';
import {View, Modal} from 'react-native';
import {styles} from './styles';
import FilterDrawer from '../../components/FilterDrawer';
import {getTransactions} from '../../redux/actions/transactionActions';
import {searchTransactions} from '../../redux/actions/searchActions';
import {sortTransactions} from '../../redux/actions/sortActions';
import TransactionItem from '../../components/TransactionItem';

const TransactionListScreen = props => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const doFilterTransactions = () => {};
  const [isShowFilterModal, setIShowFilterModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({});
  const transactions = useSelector(
    state => state.transactionModel?.transactions,
  );

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header
        onChangeText={e => dispatch(searchTransactions(e))}
        onPressFilter={() => {
          setIShowFilterModal(true);
        }}
        rightFilterName={selectedFilter.title}
      />
      <Modal
        style={styles.modal}
        visible={isShowFilterModal}
        animationType={'slide'}
        transparent={true}>
        <View style={styles.modalContent}>
          <FilterDrawer
            onPress={filter => {
              setIShowFilterModal(false);
              doFilterTransactions(filter.field, filter.method);
              dispatch(
                sortTransactions({
                  field: filter.field,
                  method: filter.method,
                }),
              );
              setSelectedFilter(filter);
            }}
            position={selectedFilter.position}
          />
        </View>
      </Modal>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentList}
        data={transactions}
        renderItem={({item, index}) => (
          <TransactionItem item={item} index={index} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TransactionListScreen;
