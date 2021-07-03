import React from 'react'
import { TableBody as MUITableBody, TableRow, TableCell } from '@material-ui/core';

const TableBody = ({ data }) => {
  console.log('Data in TableBody', data);

  const createTableRows = (entry) => {
    console.log('Data in createTableRows', entry[1]);
    const tableData = Object.entries(entry[1])
    const keys = Object.keys(tableData[1][1]);
    return tableData.map((row, id) => {
      return (
        <TableRow key={id}>
          {keys.map((key, index) => {
            return (
              <TableCell key={index}>
                <div>{row[1][key]}</div>
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  };

  return (
    <MUITableBody>
      {createTableRows(data)}
    </MUITableBody>
  )
}

export default TableBody
