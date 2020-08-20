import React from 'react';

// import { Container } from './styles';

function Material() {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Description"
      multiline
      rows={4}
      variant="outlined"
      defaultValue={description}
      onChange={handleChangeDescription}
    />
  );
}

export default Material;
