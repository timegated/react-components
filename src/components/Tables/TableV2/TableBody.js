import React from 'react'
import { TableBody as MUITableBody } from '@material-ui/core';

const TableBody = () => {
  const createTableRows = () => {
    const keys = Object.keys(noId[0]);
    return data.map((row, id) => {
      return (
        <TableRow key={id}>
          {keys.map((key, index) => {
            return (
              <TableCell key={index}>
                <div>{row[key]}</div>
              </TableCell>
            );
          })}
          {!actions ? null : <TableCell className={classes.actions}>{createTableActions(actionsArr)}</TableCell>}
          {!chips ? null : renderStatus(row.status)}
        </TableRow>

      );
    });
  };
  return (
    <MUITableBody>
      
    </MUITableBody>
  )
}

export default TableBody
