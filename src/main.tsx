// ** React Imports
import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// ** Styles
import './index.css';

const LazyApp = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<p>Loading App...</p>}>
        <LazyApp />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
