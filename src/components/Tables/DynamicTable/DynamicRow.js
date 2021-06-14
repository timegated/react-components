import { TableCell as MUITableCell } from '@material-ui/core';
import React from 'react'

const DynamicRow = ({ data, keys }) => {
  if (!data || !keys) {
    return null
  } 
  return keys.map((key, index) => {
    return (
      <MUITableCell key={index}>
        <div>{data[key]}</div>
      </MUITableCell>
    )
    });
  
};

export default DynamicRow;
