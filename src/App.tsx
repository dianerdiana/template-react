// ** React Imports
import { Suspense } from 'react';

// ** Router
import Router from './router/Router';

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
};

export default App;
