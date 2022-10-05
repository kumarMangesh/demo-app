import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FormInput = ({ handelChange, label, ...otherProps }) => (
  <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="standard-basic" label={label} variant="standard" />
  </Box>
);
export default FormInput;