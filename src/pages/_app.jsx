import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import "regenerator-runtime/runtime";

function MyApp({ Component, pageProps }) {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}

export default MyApp;
