import React, { useRef, useEffect, forwardRef } from 'react';
import { useField } from '@unform/core';
import { TextField as Input } from '@material-ui/core';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const TextField = forwardRef(({ name, ...rest }, ref) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  const wichRef = ref || inputRef;
  console.log(ref, name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: wichRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Input
      inputRef={ref || inputRef}
      error={error}
      helperText={error}
      {...rest}
    />
  );
});
TextField.propTypes = {
  name: PropTypes.string.isRequired,
};
export default TextField;
