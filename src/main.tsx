import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import ProgressBar from 'components/layout/ProgressBar';
import 'styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgressBar />
    <App />
  </StrictMode>
);
