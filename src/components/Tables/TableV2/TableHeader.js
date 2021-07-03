import React from 'react'
import { TableHead as MUITableHead, TableRow, TableCell } from '@material-ui/core';

const TableHeader = ({ data }) => {
  const createTableHeader = (obj) => {
    return Object.keys(obj).map((key, index) => {
      return (
        <TableCell component="th" key={index}>{formatText(key)}</TableCell>
      );
    });
  };

  return (
    <MUITableHead>
      <TableRow>
        <TableCell>
          <div>{data[0]}</div>
          </TableCell>
      </TableRow>
    </MUITableHead>
  )
}

export default TableHeader
