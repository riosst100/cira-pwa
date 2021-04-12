import Head from 'next/head'
import Navbar from './navbarMenu'
import Footer from './footer'
import { useCurrentUser } from '@/hooks/index';

export default function Layout(props) {
  const [user] = useCurrentUser();
  return (
    <div id="content-container">
      <div>
        <Head>
          <title>{props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href="/img/logo/cira_trans_colored.webp" />
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <Navbar user={user} />
        <div style={{ background: 'rgb(237 237 245)', padding: '0px' }}>
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