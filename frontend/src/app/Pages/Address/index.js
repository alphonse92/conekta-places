import React from 'react';
import { useParams } from 'react-router-dom';

import { Card } from '../../Layout';
import { PreviewPlace } from '../../Components/PreviewPlace';

export const Address = () => {
  const { id } = useParams();
  console.log({ id });
  return (
    <Card>
      <PreviewPlace id={id} />
    </Card>
  );
};

Address.defaultProps = {};
Address.propTypes = {};
