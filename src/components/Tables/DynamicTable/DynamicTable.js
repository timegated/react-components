import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Link,
} from '@material-ui/core';
import DynamicRow from './DynamicRow';
// import Loading from '../Loading/Loading';
// import { format } from '../../utils/format';



/**
 * OBJ represents JSON data
 * @param {object}
 * @param {array}
*/

const DynamicTable = ({ obj, actions, crud }) => {
  const [data, setData] = React.useState(obj);
 
  // we don't need the ID in the header column; could make it optional in case we do or hide it completely.
  const createTableHeader = (json) => {
    const noId = json.data.map(({ id, ...noId }) => noId);
    return Object.keys(noId[0]).map((key, index) => {
      return (<TableCell key={index}>{key}</TableCell>) // mapped over the enumerable props and displayed them
    });
  };

  const createTableRows = (json) => {
    // I need as many rows as I have properties with their corresponding values.
    const noId = json.data.map(({ id, ...noId }) => noId);
    const keys = Object.keys(noId[0]);
    return json.data.map((row, index) => {
      console.log(row);
      return (
        <TableRow key={row.id}>
          <DynamicRow key={row.id} data={row} keys={keys}/>
        </TableRow>
      );
    })
  };

  /**
   * Generates CRUD actions based on function arguments -- an array of strings.
   * @param {array} 
  */
  
  const createTableActions = ([...args]) => {
    if (!actions) {
      return null
    }
    return [...args].map((action, index) => {
      return ( <Link to="#" rel="noopener noreferrer" key={index}>{action}</Link> )
    });
  };

  return (
    <div>
      {/* <img src={exitTest} alt="" /> */}
      <Table>
        <TableHead>
          <TableRow>
            {createTableHeader(data)}
          </TableRow>
        </TableHead>
        <TableBody>
          {createTableRows(data)}
        </TableBody>
      </Table>
    </div>
  )
};

DynamicTable.propTypes = {
  obj: PropTypes.object.isRequired,
};

export default DynamicTable;
