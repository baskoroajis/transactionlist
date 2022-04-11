import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  getFullDateString,
  capitalize,
  numberToDecimal,
} from '../../utils/helper';

const TransactionItem = props => {
  const {item, index, navigation} = props;
  const {
    sender_bank = '',
    beneficiary_name = '',
    beneficiary_bank = '',
    amount = 0,
    status = '',
    created_at = '',
  } = item;
  const statusTitle = status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';

  return (
    <TouchableOpacity
      key={index.toString()}
      style={styles.item}
      onPress={() => navigation.push('TransactionDetail', item)}>
      <View style={styles.contentContainer}>
        <View style={styles.itemLeftView(status)} />
        <View style={styles.itemInfoContent}>
          <View>
            <Text style={[styles.text, styles.titleText]}>
              {capitalize(sender_bank) + ' ⮕ ' + capitalize(beneficiary_bank)}
            </Text>
            <Text style={styles.text} fontSize={14}>
              {beneficiary_name}
            </Text>
            <View style={styles.amountDescription}>
              <Text style={styles.text} fontSize={14}>
                {'Rp ' + numberToDecimal(amount.toString())}
              </Text>
              <Text style={styles.text} fontSize={14}>
                {' • ' + getFullDateString(created_at)}
              </Text>
            </View>
          </View>
          <View style={styles.statusContainer(status)}>
            <Text style={styles.textStatus(status)} fontSize={14} bold>
              {statusTitle}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
