import React from 'react'
import { TableHeader as MUITableHeader } from '@material-ui/core';

const TableHeader = () => {
  const createTableHeader = (obj) => {
    return Object.keys(obj).map((key, index) => {
      return (
        <TableCell component="th" key={index}>{formatText(key)}</TableCell>
      );
    });
  };
  return (
    <MUITableHeader>
      
    </MUITableHeader>
  )
}

export default TableHeader
