import React from 'react'
import { TableBody as MUITableBody, TableRow, TableCell } from '@material-ui/core';
import Editable from '../../Editable/Editable';

const TableBody = ({ data }) => {

  const createTableRows = (entry) => {
    const tableData = Object.entries(entry[1])
    const keys = Object.keys(tableData[1][1]);
    return tableData.map((row, id) => {
      return (
        <TableRow key={id}>
          {keys.map((key, index) => {
            return (
              <Editable key={index} onChange={(value) => value}>
              <TableCell key={index}>
                <div>{row[1][key]}</div>
              </TableCell>
              </Editable>
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
