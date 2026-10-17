import { createTheme } from '@mui/material/styles';

export const colors = {
  ink: '#111214',
  paper: '#F2F2EE',
  accent: '#2438E8',
  accentSoft: '#C9CEFF',
  accentOnDark: '#9EA4FF',
  muted: '#5B5F66',
  body: '#3E4147',
  block: '#D9DAD3',
  line: '#C9CAC3',
  darkLine: '#3A3D44',
  darkMuted: '#A9ACB3',
};

export const mono = '"IBM Plex Mono", ui-monospace, SFMono-Regular, monospace';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: colors.accent },
    text: { primary: colors.ink, secondary: colors.muted },
    background: { default: colors.paper, paper: colors.paper },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: '"Bricolage Grotesque", Helvetica, Arial, sans-serif',
    button: { textTransform: 'none', fontWeight: 500, fontSize: 16 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        'section[id]': { scrollMarginTop: '72px' },
        '::selection': { background: colors.accent, color: '#fff' },
        a: { color: 'inherit', textDecoration: 'none' },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      },
    },
    MuiButton: { defaultProps: { disableElevation: true } },
  },
});

export default theme;
