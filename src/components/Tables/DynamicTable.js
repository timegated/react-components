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
import exitTest from '../../assets/exit-test.svg';
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
    // hide id for table header for each object in this array
    // does this affect delete operation?
    const noId = json.data.map(({ id, ...noId }) => noId);
    return Object.keys(noId[0]).map((key, index) => {
      return (<TableCell component="th" align="left" key={index}>{key}</TableCell>) // mapped over the enumerable props and displayed them
    });
  };

  const createTableBody = (json) => {
    // I need as many rows as I have properties with their corresponding values.
    return json.data.map(data => {
      return (
        <TableRow key={data.id}>
          <TableCell>
            {data.uniqueId}
          </TableCell>
          <TableCell>
            {data.role}
          </TableCell>
          <TableCell>
            {data.location}
          </TableCell>
          <TableCell>
            {data.access}
          </TableCell>
          <TableCell>
            {data.course}
          </TableCell>
          <TableCell>
            {data.grade}
          </TableCell>
          <TableCell>
            {data.progress}
          </TableCell>
          <TableCell>
            {data.accuracy}
          </TableCell>
          <TableCell>
            {data.profile}
          </TableCell>
          <TableCell>
            {data.status}
          </TableCell>
          <TableCell>
            {createTableActions(crud)}
          </TableCell>
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
      <img src={exitTest} alt="" />
      <Table>
        <TableHead>
          <TableRow>
            {createTableHeader(data)}
          </TableRow>
        </TableHead>
        <TableBody>
          {createTableBody(data)}
        </TableBody>
      </Table>
    </div>
  )
};

DynamicTable.propTypes = {
  obj: PropTypes.object.isRequired,
};

export default DynamicTable;
