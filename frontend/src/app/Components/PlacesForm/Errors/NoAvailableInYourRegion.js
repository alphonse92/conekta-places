/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';

import { getStyles } from './styles';
import { useFormPlaces } from '../Context/useFormPlaces';

export const NotAvailableInYourRegion = () => {
  const classes = getStyles();
  const {
    getString,
    exit,
  } = useFormPlaces();

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
        <p>{getString('ERROR_COUNTRY_NOT_AVAILABLE')}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={exit}
        >
          {getString('STR_CONTINUE')}
        </Button>
      </div>
    </div>
  );
};

NotAvailableInYourRegion.propTypes = {};
NotAvailableInYourRegion.defaultProps = {};
