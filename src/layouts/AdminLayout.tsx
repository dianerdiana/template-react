// ** Router DOM
import { Outlet } from 'react-router-dom';

// ** Core Layout Import
import Layout from '../@core/layouts/AdminLayout';

const AdminLayout = () => {
  // const [menuData, setMenuData] = useState([])

  // ** For ServerSide navigation
  // useEffect(() => {
  //   axios.get(URL).then(response => setMenuData(response.data))
  // }, [])

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default AdminLayout;
