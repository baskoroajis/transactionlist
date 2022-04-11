import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {TextInput} from 'react-native-element-textinput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

const Header = props => {
  const {onChangeText, rightFilterName, onPressFilter} = props;
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderTextColor={'rgb(159,159,159)'}
          onChangeText={onChangeText}
          placeholder="Cari nama, bank, atau nominal"
          renderLeftIcon={() => (
            <AntDesign
              style={styles.searchIcon}
              name="search1"
              size={18}
              color={'rgb(159,159,159)'}
            />
          )}
          renderRightIcon={() => (
            <TouchableOpacity
              onPress={onPressFilter}
              style={styles.rightIconContainer}>
              <Text fontSize={14} style={styles.sortText}>
                {rightFilterName || 'Urutkan'}
              </Text>
              <AntDesign
                style={styles.downIcon}
                name="down"
                size={18}
                color={'rgb(229,113,75)'}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Header;
