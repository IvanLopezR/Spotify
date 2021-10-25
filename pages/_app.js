import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/es';

import { Header } from '../components';
import { wrapper } from '../redux/store';


function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    );
}

export default wrapper.withRedux(MyApp);
