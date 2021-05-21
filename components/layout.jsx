import Head from 'next/head'
import Navbar from './navbarMenu'
import BottomMenu from './bottomMenu'
import { useCurrentUser } from '@/hooks/user';
import { favicon } from '@/lib/core-data';
import Footer from '@/components/footer';

export default function Layout(props) {
  const [user] = useCurrentUser();
  return (
    <div id="content-container">
      <div>
        <Head>
          <title>{props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="icon" href={favicon} />
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <Navbar user={user} />
        <div style={{ padding: '0px' }}>
          {props.children}
        </div>
        <BottomMenu />
      </div>
      {props.hideFooter ? '' : <Footer />}
    </div>
  )
}