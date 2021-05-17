import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@material-ui/core';
import Loading from '../Loading/Loading';
import { format } from '../../utils/format';



/**
 * OBJ represents JSON data
 * @param {object}
 *  
*/

const DynamicTable = ({ obj }) => {
  const [data, setData] = React.useState(obj);

  const createTableHeader = (json) => {
    console.log('from createTableHeader', json)
    return Object.keys(json.games[0]).map((key, index) => {
      return (<TableCell component="th" align="left" key={index}>{key}</TableCell>)
    });
  };

  const createTableBody = (json) => {
    console.log('from createTableBody', json)
    return json.games.map(game => {
      return (
        <TableRow key={game.id}>
          <TableCell>
            {game.location}
          </TableCell>
          <TableCell>
            {game.courseName}
          </TableCell>
          <TableCell>
            {game.questions}
          </TableCell>
          <TableCell>
            {game.levels}
          </TableCell>
          <TableCell>
            {game.avg}
          </TableCell>
        </TableRow>
      );
    })
  };

  return (
    <div>
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
