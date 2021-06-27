import { makeStyles } from '@material-ui/core';

export const getStyles = makeStyles((theme) => ({
  root: {
    minWidth: '50%',
  },
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
  formInput: {
    width: '100%',
  },
}));
