import React from 'react'
import {
  Table as MUITable,
} from '@material-ui/core';
import EditTable from './EditTable';

/**
 * This is a table component that can take in both flat and nested objects
 *  
 * @returns {React.Component}
 */
const TableV2 = ({ data }) => {
  return (
    <div>
      <EditTable data={data} />
    </div>
  )
}

export default TableV2