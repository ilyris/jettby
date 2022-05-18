import { useSelector } from "react-redux";

import Menu from "./Menu";
import Footer from "./Footer/Footer";
import Alert from "../components/Alert/Alert";

export default function Layout({ children }) {
  const hasAlert = useSelector((state) => state.alert.isActive);

  return (
    <>
      <Menu />
      <main>
        {hasAlert && <Alert />}
        {children}
      </main>
      <Footer />
    </>
  );
}
