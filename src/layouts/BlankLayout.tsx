// ** Router DOM
import { Outlet } from 'react-router-dom';

// ** Core Layout Import
import Layout from '../@core/layouts/BlankLayout';

const BlankLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default BlankLayout;
