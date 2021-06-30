import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import { getStyles } from './styles';

export default function Card({ children }) {
  const classes = getStyles();
  return (
    <Paper elevation={2} classes={{ root: classes.root }}>
      {children}
    </Paper>
  );
}

Card.defaultProps = {};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

Card.displayName = 'AppProvider';
