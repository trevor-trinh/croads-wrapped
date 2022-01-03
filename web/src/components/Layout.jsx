import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({
  loading,
  username,
  swipesBal,
  flexBal,
  weekStart,
  children,
}) => (
  <>
    <NavBar
      username={username}
      swipesBal={swipesBal}
      flexBal={flexBal}
      weekStart={weekStart}
    />
    {!loading && children}
    <Footer />
  </>
);

export default Layout;
