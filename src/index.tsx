import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'styles/theme';
import App from './App';
import './i18n';
import './index.scss';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export const rootPortal = document.getElementById('portal') as HTMLElement;

root.render(
  <BrowserRouter basename="/project-management-app">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
