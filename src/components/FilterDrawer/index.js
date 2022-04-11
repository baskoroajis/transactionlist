import Checkbox from '../Checkbox';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const FilterDrawer = props => {
  const {onPress, position = 0} = props;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Checkbox
          check={position === 0}
          type="radio"
          size={24}
          label="URUTKAN"
          onPress={e => {
            onPress({position: 0, title: 'URUTKAN'});
          }}
        />
      </View>
      <View style={styles.item}>
        <Checkbox
          check={position === 1}
          type="radio"
          size={24}
          label="Nama A-Z"
          onPress={e => {
            onPress({
              field: 'name',
              method: 'asc',
              position: 1,
              title: 'Nama A-Z',
            });
          }}
        />
      </View>

      <View style={styles.item}>
        <Checkbox
          check={position === 2}
          type="radio"
          size={24}
          label="Nama Z-A"
          onPress={e => {
            onPress({
              field: 'name',
              method: 'desc',
              position: 2,
              title: 'Nama Z-A',
            });
          }}
        />
      </View>

      <View style={styles.item}>
        <Checkbox
          check={position === 3}
          type="radio"
          size={26}
          label="Tanggal Terbaru"
          onPress={e => {
            onPress({
              field: 'date',
              method: 'desc',
              position: 3,
              title: 'Tanggal Terbaru',
            });
          }}
        />
      </View>
      <View style={styles.item}>
        <Checkbox
          check={position === 4}
          type="radio"
          size={26}
          label="Tanggal Terlama"
          onPress={e => {
            onPress({
              field: 'date',
              method: 'asc',
              position: 4,
              title: 'Tanggal Terlama',
            });
          }}
        />
      </View>
    </View>
  );
};

export default FilterDrawer;
