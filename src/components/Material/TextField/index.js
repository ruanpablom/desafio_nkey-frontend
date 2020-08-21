import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { TextField as Input } from '@material-ui/core';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function TextField({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Input inputRef={inputRef} error={error} helperText={error} {...rest} />
    </>
  );
}
TextField.propTypes = {
  name: PropTypes.string.isRequired,
};
export default TextField;
