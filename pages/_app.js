import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Router from 'next/router';
import NProgress from '../components/nprogress'; //nprogress module
import io from 'socket.io-client'
import App from 'next/app'

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

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  state = {
    socket: null,
  }
  componentDidMount() {
    // connect to WS server and listen event
    const socket = io()
    this.setState({ socket })
  }

  // close socket connection
  componentWillUnmount() {
    this.state.socket.close()
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} socket={this.state.socket} />
  }
}

export default MyApp
