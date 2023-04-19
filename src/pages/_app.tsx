import '../styles/globals.css';
import 'regenerator-runtime/runtime';
import './test.module.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
