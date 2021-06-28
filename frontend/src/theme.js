import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from 'conekta-places-lib/constants/colors';

export default createMuiTheme({
  margin: {
    default: '13px',
    double: '26px',
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
