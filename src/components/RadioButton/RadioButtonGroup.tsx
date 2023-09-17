import {View, Text} from 'react-native';
import RadioButton from './RadioButton';
import React from 'react';
import {RadioButtonGroupProps} from './types';

const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  const {options, selectedOption, onSelect, onColor, offColor, size, divider} = props;
  return (
    <>
      {options.map((option, index) => (
        <React.Fragment key={option.id}>
          <RadioButton
            onColor={onColor}
            offColor={offColor}
            size={size}
            icon={typeof option === 'object' && 'icon' in option ? option.icon : null}
            label={option.label}
            selected={selectedOption === option.value}
            onSelect={() => onSelect(option.value)}
          />
          {divider && index !== options.length - 1 && (
            <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 8}} />
          )}
        </React.Fragment>
      ))}
      {/* <Text>Selected : {selectedOption}</Text> */}
    </>
  );
};
export default RadioButtonGroup;
