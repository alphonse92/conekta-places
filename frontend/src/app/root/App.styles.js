import { makeStyles } from '@material-ui/core';

export const getStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    fontFamily: 'roboto, sans-serif',
    color: theme.palette.base.white,
    backgroundColor: theme.palette.primary.color,
    '& h1': {
      fontSize: theme.fontSize.h1,
    },
    '& h2': {
      fontSize: theme.fontSize.h2,
    },
    '& h3': {
      fontSize: theme.fontSize.h3,
    },
    '& h4': {
      fontSize: theme.fontSize.h4,
    },
    '& h5': {
      fontSize: theme.fontSize.h5,
    },
    '& a': {
      textDecoration: 'none',
    },
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.fontSize.normal,
  },
  formContainer: {
    minWidth: '50%',
  },
}));
