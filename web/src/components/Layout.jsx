import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ data, loading, children }) => (
  <>
    <NavBar data={data} />
    {!loading && children}
    <Footer />
  </>
);

export default Layout;
