import React from 'react';
import useStyles from '../styles';
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@material-ui/core';
import DynamicRow from './DynamicRow';
// import Loading from '../Loading/Loading';
// import { format } from '../../utils/format';



/**
 * 
 * @param {object} props.data - json data from an API request
 * @param {array} propos.actions - array of strings passed in for CRUD
*/
const DynamicTable = ({ actions }) => {
  const [data, setData] = React.useState(null);
  const classes = useStyles();
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(json => {
        return setData(json);
      })
      .catch(e => {
        console.error(e)
      });
  }, []);

  if (data === null) {
    return <h2 style={{textAlign: 'center'}}>Loading ...</h2>
  };

  const noId = data.map(({ id, address, company, ...rest }) => rest); // No need for id's as a table column
  // const noStatus = data.map(({ id, status, ...rest }) => rest);

  // const omitProperties = (json, ...args) => {
  //   const singleArg = args.map(arg => {
  //     return arg;
  //   });
  //   const doesExist = json.map(data => {
  //     return data.hasOwnProperty([singleArg[0]]);
  //   })

  //   const selectedProps = json.map(item => item);
  //   return selectedProps;
  // };

  // we don't need the ID in the header column; could make it optional in case we do or hide it completely.
  const createTableHeader = () => {
    if (data === null) return null;
    return Object.keys(noId[0]).map((key, index) => {
      return (<TableCell key={index}>{key}</TableCell>) // mapped over the enumerable props and displayed them
    });
  };

  const createTableRows = () => {

    if (data === null) return null;

    const keys = Object.keys(noId[0]);
    return data.map((row, id) => {
      return (
        <TableRow className="table__row" key={id}>
          {keys.map((key, index) => {
            return (
              <TableCell className="table__text" key={index}>
                <div>{row[key]}</div>
              </TableCell>
            );
          })}
        </TableRow>

      );
    });
  };
  // const createTableRows = () => {
  //   const noId = data.map(({ id, ...noId }) => noId);
  //   const keys = Object.keys(noId[0]);
  //   return data.map((row) => {
  //     return (
  //       <TableRow key={row.id}>
  //         <DynamicRow key={row.id} data={row} keys={keys}/>
  //       </TableRow>
  //     );
  //   })
  // };

  /**
   * Generates CRUD actions based on function arguments -- an array of strings.
   * @param {array} 
  */
  // const createTableActions = ([...args]) => {
  //   if (!actions) {
  //     return null
  //   }
  //   return [...args].map((action, index) => {
  //     return ( <Link to="#" rel="noopener noreferrer" key={index}>{action}</Link> )
  //   });
  // };
 
  console.log('the data from useEffect ==> ', data);
  return (
    <div>
      <Table className={classes.root}>
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

export default DynamicTable;
