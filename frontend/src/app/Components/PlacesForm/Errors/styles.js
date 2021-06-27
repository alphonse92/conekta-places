import { makeStyles } from '@material-ui/core';

export const getStyles = makeStyles(() => ({
  errorContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  videoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorVideo: {
    width: '50%',
    '-webkit-mask-box-image': "url('https://media.flaticon.com/dist/min/img/video/rex/mask.svg')",
    'mask-image': "url('https://media.flaticon.com/dist/min/img/video/rex/mask.svg')",
  },
}));
