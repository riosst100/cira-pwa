import Head from 'next/head'
import Navbar from './NavbarMenu'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div id="content-container">
      <div>
        <Head>
          <title>{props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href="https://brebes-social.id/assets/images/logo/cira.webp" />
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <Navbar />
        <div style={{ background: '#edf2f7', padding: '0px' }}>
          {props.children}
        </div>
        <Footer />
      </div>
      <div className="footer mb-12 pb-3">
        <div className="footer-title">
          Copyright © Cira App 2021. All Rights Reserved.
        </div>
        Inovasi untuk kemudahan online
      </div>
    </div>
  )
}