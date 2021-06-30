import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from 'conekta-places-lib/dist/constants/colors';

export default createMuiTheme({
  margin: {
    default: '13px',
    double: '26px',
    extra: '52px',
  },
  fontSize: {
    tiny: '10px',
    small: '11px',
    normal: '12px',
    extra: '14px',
    big: '16px',
    h1: '48px',
    h2: '24px',
    h3: '18px',
    h4: '16px',
    h5: '14px',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 710,
      lg: 1030,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: '#DA098F',
      background: colors.base.white,
      color: '#0B1737',
    },
    secondary: {
      main: '#FFFFFF',
      background: colors.base.white,
      color: '#0B1737',
    },
    ...colors,
  },
  overrides: {
    // https://material-ui.com/es/customization/components/#global-css-override
  },
  props: {
    // https://material-ui.com/customization/globals/#default-props
    MuiButtonBase: {
      disableRipple: true,
      focusRipple: false,
    },
  },
});
