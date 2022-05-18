// Comps
import Layout from "../components/layout";
import SSRProvider from "react-bootstrap/SSRProvider";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/variables.scss";
import "../styles/components/components.scss";
import "../styles/globals.scss";
// Redux
import { Provider } from "react-redux";
import store from "../redux/store";

// lightbox
import SimpleReactLightbox from "simple-react-lightbox";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SSRProvider>
        <SimpleReactLightbox>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SimpleReactLightbox>
      </SSRProvider>
    </Provider>
  );
}
