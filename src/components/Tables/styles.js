import { makeStyles } from '@material-ui/core/styles';

/** 
 * Hook for injecting custom styles into mui components
 * @param {object} theme - theme object from mui default and/or custom
 * @returns {object} - css styles computed with JS
 */
const useStyles = makeStyles((theme) => ({ // Responsive table styles with MUI
  root: {
    marginTop: '4.5rem',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'table',
      alignSelf: 'center',
    },
    [theme.breakpoints.up('md')]: {
    },
    ['& th']: {
      display: 'none',
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        display: 'table-cell',
        textAlign: 'left',
      }
    },
    ['& td']: {
      display: 'block',
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        display: 'table-cell',
        textAlign: 'left',
      }
    },
    ['& svg']: {
      '&:hover': {
        cursor: 'pointer'
      }
    },
  },
}));

export default useStyles;
