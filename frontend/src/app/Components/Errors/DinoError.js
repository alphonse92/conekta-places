/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { getStyles } from './styles';
// import { useFormPlaces } from '../Context/useFormPlaces';
// import { useLanguage } from '../../root/LanguageProvider/use';

export const DinoError = ({
  onContinue,
  text,
  label,
}) => {
  const classes = getStyles();

  return (
    <div className={classnames(classes.errorContainer)}>
      <div className={classnames(classes.videoContainer)}>
        <video
          className={classnames(classes.errorVideo)}
          autoPlay
          loop
        >
          <source src="https://media.flaticon.com/dist/min/img/video/rex/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={classnames(classes.controls)}>
        <p>{text}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={onContinue}
        >
          {label}
        </Button>
      </div>
    </div>
  );
};

DinoError.propTypes = {
  onContinue: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
DinoError.defaultProps = {};
