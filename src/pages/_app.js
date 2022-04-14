import '@styles/tailwindcss.css';
import MainLayout from '@layout/MainLayout';
import { Main } from 'next/document';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
