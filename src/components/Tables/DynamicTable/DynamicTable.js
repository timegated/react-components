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
 * 
 * @param {object} props.data - json data from an API request
 * @param {array} propos.actions - array of strings passed in for CRUD
*/
const DynamicTable = ({ data, actions }) => {

  // returns only select properties from an object
  const omitProperties = (json, ...args) => {
    const singleArg = args.map(arg => {
      console.log('the arg ==> ', arg);
      return arg;
    });
    const doesExist = json.map(data => {
      return data.hasOwnProperty([singleArg[0]]);
    })
    console.log('do any of the args exist on the object? ==> ', doesExist)

    const selectedProps = json.map(item => item);
    // console.log('the json object', json);
    // console.log('the first argument from ...args ==> ', args[0]);
    // console.log('the id property ==> ', json[0][`${args[0]}`]);
    // console.log('the selected properties ==> ', selectedProps);
    return selectedProps;
  };

  omitProperties(data, 'id', 'status','access');
  
  // we don't need the ID in the header column; could make it optional in case we do or hide it completely.
  const createTableHeader = () => {
    const noId = data.map(({ id, ...noId }) => noId);
    return Object.keys(noId[0]).map((key, index) => {
      return (<TableCell key={index}>{key}</TableCell>) // mapped over the enumerable props and displayed them
    });
  };

  const createTableRows = () => {
    // I need as many rows as I have properties with their corresponding values.
    const noId = data.map(({ id, ...noId }) => noId);
    const keys = Object.keys(noId[0]);
    return data.map((row) => {
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
  data: PropTypes.array.isRequired,
};

export default DynamicTable;
