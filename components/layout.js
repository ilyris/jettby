import Menu from './Menu';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
