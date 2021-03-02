import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Router from 'next/router';
import NProgress from '../components/nprogress';

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
		<>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp