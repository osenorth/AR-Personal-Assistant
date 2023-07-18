import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import "regenerator-runtime/runtime";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...restPageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
