import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {RadioButtonProps} from './types';
import Typography from '../Typography';

const RadioButton = (props: RadioButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const {
    label,
    selected,
    onSelect,
    icon,
    onColor = '#000', //default value
    offColor = '#000', //default value
    size = 24, //default value
  } = props;
  return (
    <Pressable
      onPress={onSelect}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            height: size,
            width: size,
            borderRadius: Math.round(size / 2),
            borderWidth: 2,
            borderColor: selected ? onColor : offColor,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pressed ? 0.5 : 1,
          }}
        >
          {selected && (
            <View
              style={{
                height: Math.round(size / 2),
                width: Math.round(size / 2),
                borderRadius: Math.round(size / 4),
                backgroundColor: onColor,
                opacity: pressed ? 0.5 : 1,
              }}
            />
          )}
        </View>
        {icon && <View style={{width: 30, alignItems: 'center', marginLeft: 10}}>{icon}</View>}
        <Typography variant="B2S" classname="ml-2">
          {label}
        </Typography>
      </View>
    </Pressable>
  );
};

export default RadioButton;
