import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './app/store';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const theme = createTheme({});

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);