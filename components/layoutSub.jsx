import Head from 'next/head'
import Navbar from './navbar'
import Footer from '@/components/footer';
import { favicon } from '@/lib/core-data';

export default function LayoutSub(props) {
  return (
      <div>
        <Head>
          <title>{props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="icon" href={favicon} />
        </Head>
        <Navbar title={props.title} isShop={props.isShop} />
        <div style={{ padding: '45px 0px 0px 0px' }}>
          {props.children}
        </div>
        {props.hideFooter ? '' : <Footer />}
      </div>
  )
}