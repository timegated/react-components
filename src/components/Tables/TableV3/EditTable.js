import React, { useState, useEffect } from 'react';
import { Table as MUITable, TableCell, TableHead, TableBody, TableRow } from '@material-ui/core';

const EditTable = ({ data }) => {
  const vals = Object.values(data);
  const keys = Object.keys(vals[0]);
  const [cols, setCols] = useState({});
  const [rows, setRows] = useState({});
  const [edit, setEdit] = useState(false);

  if(!cols || !rows) {
    return <div>No data present</div>
  }

  useEffect(() => {
    setRows(vals);
    setCols(keys);
  }, [])

  const createTableHeader = () => {
    return cols.map(col => (
      <TableCell>
        <div>{col}</div>
      </TableCell>
    ))
  }
  const createTableBody = () => {

  }

  console.log('TableV3 columns', cols);
  console.log('TableV3 rows', rows);

  return (
    <MUITable>
      <TableHead>
      </TableHead>
      <TableBody>

      </TableBody>
    </MUITable>
  )
};

export default EditTable;