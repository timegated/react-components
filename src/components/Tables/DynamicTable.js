import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@material-ui/core';

const format = (string) => {
  return string[0].toUpperCase() + string.substring(1);
};

/**
 * OBJ represents JSON data
 * @param {object}
 * */ 
const DynamicTable = ({ obj }) => {
  console.log(obj[0])
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(obj[0]).map((key, index) => {
              // console.log('the object keys', key);
              console.log('the formatting function',format(key));
              return (
                <TableCell key={index}>{format(key)}</TableCell>
              )
            })};
          </TableRow>
        </TableHead>
      </Table>
    </div>
  )
};

DynamicTable.propTypes = {
  obj: PropTypes.array.isRequired,
};

export default DynamicTable;
