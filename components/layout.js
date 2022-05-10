import Menu from "./Menu";
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
