import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { getStyles } from './styles';

export const ControlButtonContainer = ({ children }) => {
  const classes = getStyles();
  return (
    <div className={classnames(classes.root)}>
      {children}
    </div>
  );
};

ControlButtonContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};
