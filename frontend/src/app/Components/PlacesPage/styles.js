import { makeStyles } from '@material-ui/core';

export const getStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.margin.double,
    paddingRight: theme.margin.double,
    paddingTop: theme.margin.extra,
    paddingBottom: theme.margin.extra,
  },
  pageContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  selectCountryContainer: {
    width: '100%',
    marginBottom: theme.margin.double,
  },
}));
