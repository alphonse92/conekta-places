import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const InfoDialog = ({
  isOpen,
  title,
  text,
  onAccept,
  acceptLabel,
}) => (
  <>
    <Dialog open={isOpen}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAccept} color="primary" autoFocus>
          {acceptLabel}
        </Button>
      </DialogActions>
    </Dialog>
  </>
);

InfoDialog.defaultProps = {};

InfoDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  acceptLabel: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
};

InfoDialog.displayName = 'InfoDialog';
