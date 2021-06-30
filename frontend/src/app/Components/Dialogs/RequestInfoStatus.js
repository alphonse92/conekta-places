import React from 'react';
import PropTypes from 'prop-types';

import { useLanguage } from '../../root/LanguageProvider/use';
import { InfoDialog } from './InfoDialog';

export const RequestInfoStatus = ({ isOpen, status, onAccept }) => {
  const { getString } = useLanguage();
  const registerSuccessfuly = status && status.result;
  return (
    <InfoDialog
      isOpen={isOpen}
      onAccept={onAccept}
      title="Conekta Places"
      text={(
        registerSuccessfuly
          ? getString('COUNTRY_FORM_SAVED_SUCCESS')
          : getString('COUNTRY_FORM_SAVE_FAILED')
      )}
      acceptLabel={getString('STR_CONTINUE')}
    />
  );
};

RequestInfoStatus.defaultProps = {};

RequestInfoStatus.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  status: PropTypes.object.isRequired,
  onAccept: PropTypes.func.isRequired,
};

RequestInfoStatus.displayName = 'InfoDialog';
