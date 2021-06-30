import { makeStyles } from '@material-ui/core';

export const getStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row-reverse',
    '& button': {
      marginLeft: theme.margin.default,
    },
  },
}));
