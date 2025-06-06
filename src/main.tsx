import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import ProgressBar from 'components/layout/ProgressBar';
import BottomNavigation from 'components/shared/BottomNavigation';
import { Provider } from 'react-redux';
import { store } from '@/store';
import 'styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <ProgressBar />
        <App />
        <BottomNavigation />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
