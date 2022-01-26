import React from 'react'
import { TableHead as MUITableHead, TableRow, TableCell } from '@mui/material';

const TableHeader = ({ data }) => {
  return (
    <MUITableHead>
      <TableRow>
        <TableCell>
          <div style={{fontSize: '24px', fontWeight: 'bold'}}>{data[0].toUpperCase()}</div>
          </TableCell>
      </TableRow>
    </MUITableHead>
  )
}

export default TableHeader
