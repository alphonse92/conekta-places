import { makeStyles } from '@material-ui/core';

export const getStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.margin.double,
    paddingRight: theme.margin.double,
    paddingTop: theme.margin.extra,
    paddingBottom: theme.margin.extra,
    marginTop: theme.margin.extra,
    marginBottom: theme.margin.extra,
  },
}));
