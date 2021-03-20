import { createMuiTheme } from '@material-ui/core';

const appTheme = createMuiTheme(
    {
        spacing: 5,
        palette: {
            primary: {
                dark: '#0061a0',
                main: '#007abc',
                light: '0090da'
            },
            secondary: {
                main: '#007abc',
                light: '0090da'
            },
            background: {
                default: '#e6e6e6'
            }
        }
    }
);

export default appTheme;