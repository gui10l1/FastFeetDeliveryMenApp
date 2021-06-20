import { useField } from '@unform/core';
import React, { FC, useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Icon, StyledInput } from './styles';

interface IInput extends TextInputProps {
  icon: string;
  name: string;
}

interface IInputRef {
  value: string;
}

const Input: FC<IInput> = ({ name, icon, ...rest }) => {
  const { defaultValue, fieldName, registerField } = useField(name);
  const inputRef = useRef<IInputRef>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={22} />
      <StyledInput
        {...rest}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputRef.current.value = value;
        }}
        placeholderTextColor="#BEBCCC"
      />
    </Container>
  );
};

export { Input };
