import { makeStyles } from '@material-ui/core';

export const getStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    fontFamily: 'roboto, sans-serif',
    color: theme.palette.base.white,
    backgroundColor: theme.palette.primary.color,
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  formContainer: {
    minWidth: '50%',
  },
}));
