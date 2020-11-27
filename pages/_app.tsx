import { AppProps } from 'next/app';
import Shell from '../components/shell';

import '../styles/main.scss';

const IndexApp = ({ Component, pageProps }: AppProps) => (
  <Shell>
    <Component {...pageProps} />
  </Shell>
);

export default IndexApp;
