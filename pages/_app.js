// Comps
import Layout from '../components/layout';
import SSRProvider from 'react-bootstrap/SSRProvider';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/variables.scss';
import '../styles/components/components.scss';
// Redux
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </Provider>
  );
}
