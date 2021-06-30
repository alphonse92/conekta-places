import { makeStyles } from '@material-ui/core';

export const getStyles = makeStyles((theme) => ({
  formBodyContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.margin.default,
  },
  formBodyRowContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.margin.double,
  },
  inputContainer: {
    width: '100%',
    margin: theme.margin.default,
  },
}));
