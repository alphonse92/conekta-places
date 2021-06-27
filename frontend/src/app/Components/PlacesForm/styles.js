import { makeStyles } from '@material-ui/core';

export const getStyles = makeStyles((theme) => ({
  root: {
    minWidth: '50%',
  },
  formBodyContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  formBodyRowContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing.default,
  },
  formInput: {
    width: '100%',
  },
}));
