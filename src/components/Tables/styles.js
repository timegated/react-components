import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      alignSelf: 'center',
    },
    [theme.breakpoints.up('md')]: {
      border: '1px solid red',
    },
    border: '2px solid green',
    ['& th']: {
      border: '1px solid black',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        textAlign: 'left',
      }
    },
    ['& td']: {
      border: '1px solid black',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        textAlign: 'left',
      }
    },
  },
}));

export default useStyles;
