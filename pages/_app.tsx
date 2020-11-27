import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Shell from '../components/shell';
import { useStore } from '../store';

import '../styles/main.scss';

const IndexApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxStore);
  return (
    <Provider store={store}>
      <Shell>
        <Component {...pageProps} />
      </Shell>
    </Provider>
  );
};

export default IndexApp;
