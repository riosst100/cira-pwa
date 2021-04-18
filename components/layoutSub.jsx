import Head from 'next/head'
import Navbar from './navbar'
import { useCurrentUser } from '@/hooks/index';

export default function LayoutSub(props) {
  return (
      <div>
        <Head>
          <title>{props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href="https://brebes-social.id/public/images/logo/cira-blue-transparent.png" />
        </Head>
        <Navbar title={props.title} />
        <div style={{ background: 'rgb(237 237 245)', padding: '60px 10px 10px 10px' }}>
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