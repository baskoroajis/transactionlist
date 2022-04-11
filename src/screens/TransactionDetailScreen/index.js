import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  getFullDateString,
  capitalize,
  numberToDecimal,
} from '../../utils/helper';

const TransactionDetailScreen = props => {
  const {route, navigation} = props;
  const {
    id,
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    account_number,
    remark,
    unique_code,
    created_at,
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <View style={styles.idTransactionSection}>
            <Text style={[styles.text, styles.textTitle]} fontSize={15} bold>
              {'ID TRANSAKSI: #' + id}
            </Text>
            <MaterialCommunityIcons
              style={styles.idTransactionIcon}
              name="content-copy"
              size={18}
              color={'rgb(229,113,75)'}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.separatorOne} />
        <View style={styles.detailTransactionSection}>
          <Text style={[styles.text, styles.textTitle]}>
            {'DETAIL TRANSAKSI'}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.text, styles.textTitle, styles.closeButton]}>
              {'Tutup'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separatorTwo} />

        <Text
          style={[styles.text, styles.senderBankContainer, styles.textTitle]}>
          {capitalize(sender_bank) + ' ⮕ ' + capitalize(beneficiary_bank)}
        </Text>
        <View style={styles.detailBottomSection}>
          <View>
            <Text style={styles.text}>{beneficiary_name}</Text>
            <Text style={styles.text}>{account_number}</Text>
          </View>
          <View style={styles.detailText}>
            <Text style={[styles.text, styles.textTitle]}>{'NOMINAL'}</Text>
            <Text style={styles.text}>
              {'Rp' + numberToDecimal(amount.toString())}
            </Text>
          </View>
        </View>

        <View style={styles.detailBottomSection}>
          <View>
            <Text style={[styles.text, styles.textTitle]}>
              {'BERITA TRANSFER'}
            </Text>
            <Text style={styles.text}>{remark}</Text>
          </View>
          <View style={styles.detailText}>
            <Text style={[styles.text, styles.textTitle]}>{'KODE UNIK'}</Text>
            <Text style={[styles.text]}>{unique_code}</Text>
          </View>
        </View>

        <Text style={[styles.text, styles.timeCreateText, styles.textTitle]}>
          {'WAKTU DIBUAT'}
        </Text>
        <Text style={styles.text} fontSize={14}>
          {getFullDateString(created_at)}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetailScreen;
