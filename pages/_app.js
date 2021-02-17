import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Router from 'next/router';
import NProgress from '../components/nprogress';
import { CookiesProvider } from "react-cookie"

let timeout;
Router.events.on('routeChangeStart', () => {
  timeout = setTimeout(() => {
    NProgress.start()
  }, 100);
});
Router.events.on('routeChangeComplete', () => {
  clearTimeout(timeout);
  NProgress.done()
}); 
Router.events.on('routeChangeError', () => {
  clearTimeout(timeout);
  NProgress.done()
});

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}

export default MyApp