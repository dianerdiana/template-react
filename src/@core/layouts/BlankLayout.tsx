// ** React Imports
import React, { Suspense, useEffect, useState } from 'react';

// ** Props
type BlankLayoutProps = {
  children: React.ReactNode;
};

const BlankLayout: React.FC<BlankLayoutProps> = ({ children }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="blank-page">
        <div className="app-content content">
          <div className="content-wrapper">
            <div className="content-body">{children}</div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default BlankLayout;
