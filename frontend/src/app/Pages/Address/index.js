import React from 'react';
import {
  useParams,
  useHistory,
} from 'react-router-dom';

import { Card } from '../../Layout';
import { PreviewPlace } from '../../Components/PreviewPlace';

export const Address = () => {
  const { id } = useParams();
  const history = useHistory();
  const onBack = () => history.push('/list');
  return (
    <Card>
      <PreviewPlace id={id} onBack={onBack} />
    </Card>
  );
};

Address.defaultProps = {};
Address.propTypes = {};
