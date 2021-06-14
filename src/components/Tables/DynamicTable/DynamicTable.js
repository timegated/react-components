import React from 'react';
import useStyles from '../styles';
import { useSnackbar } from 'notistack';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@material-ui/core';
import Editable from '../../ContentEdit/Editable';

/**
 * 
 * @param {object} props.data - json data from an API request
 * @param {array} propos.actions - array of strings passed in for CRUD
*/
const DynamicTable = ({ actions }) => {
  const [data, setData] = React.useState(null);
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleIconClick = (key) => {
    return enqueueSnackbar(`Sorting column ${JSON.stringify(key)}`, {
      variant: 'info',
      preventDuplicate: true,
    });
  };

  /**
   * Mocking data from an api, this is pretty much how we would use it from an in house API
   * 
   */
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        enqueueSnackbar('Loading successful', {
          variant: 'success',
        });
        return res.json();
      })
      .then(json => {
        enqueueSnackbar('Loading successful', {
          variant: 'success',
        });
        return setData(json);
      })
      .catch(e => {
        enqueueSnackbar('Loading failed!', {
          variant: 'error',
          preventDuplicate: true,
        });
        console.error(e)
      });
  }, []);

  if (data === null) {
    return <h2 style={{textAlign: 'center'}}>Loading ...</h2>
  };

  const noId = data.map(({ id, address, company, ...rest }) => rest); // No need for id's as a table column
 
  const createTableHeader = () => {
    return Object.keys(noId[0]).map((key, index) => {
      return (<TableCell
        key={index}
      >
        {key}
        <ArrowDownIcon className={classes.icon} onClick={() => handleIconClick(key)} />
      </TableCell>) // mapped over the enumerable props and displayed them
    });
  };

  const createTableRows = () => {
    
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

  return (
    <div>
      <Editable />
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            {data === null ? null : createTableHeader(data)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data === null ? null : createTableRows(data)}
        </TableBody>
      </Table>
    </div>
  )
};

export default DynamicTable;
