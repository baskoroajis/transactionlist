import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View, Image, Text} from 'react-native';
import {styles} from './styles';

const checkbox_check = require('../../assets/icons/checkbox-check.png');
const checkbox_uncheck = require('../../assets/icons/checkbox-uncheck.png');
const radio_check = require('../../assets/icons/radio-check.png');
const radio_uncheck = require('../../assets/icons/radio-uncheck.png');

const Checkbox = props => {
  const {
    style,
    size = 25,
    type = 'checkbox',
    color,
    check = false,
    label,
    labelStyle,
    fontFamily,
    onPress,
  } = props;

  const [value, setValue] = useState(check);

  useEffect(() => {
    if (check) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [check]);

  const font = () => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily,
      };
    } else {
      return {};
    }
  };

  const onClick = () => {
    setValue(!value);
    if (onPress) {
      onPress(!value);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[style ? style : styles.container]}>
        <Image
          style={styles.image(size)}
          source={
            type === 'checkbox'
              ? value
                ? checkbox_check
                : checkbox_uncheck
              : value
              ? radio_check
              : radio_uncheck
          }
        />
        {label && (
          <Text
            style={[
              styles.text,
              {fontSize: size - 5, color: color},
              labelStyle,
              font(),
            ]}>
            {label}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;
