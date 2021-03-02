import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function LayoutSub(props) {
  return (
      <div>
        <Head>
          <title>{props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href="https://brebes-social.id/assets/images/logo/cira.webp" />
        </Head>
        <Navbar />
        <div style={{ background: '#edf2f7', padding: '10px' }}>
          {props.children}
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