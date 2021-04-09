import Layout from '../components/Layout'
import LoginRegister from '../components/LoginRegister'
import UserList from '../components/UserList'
import withApollo from "../lib/apollo";

const Home = props => {
  return (
    <Layout title="Cira App">
        <div className="section content-section pt-1">
          <img className="home-banner" src="http://brebes-social.id/public/images/banner/banner-cira.png"/>
        </div>
        <LoginRegister />
    </Layout>
  )
}

export default withApollo({ ssr: true })(Home);