import Layout from '../components/Layout'
import LoginRegister from '../components/LoginRegister'
import UserList from '../components/UserList'
import withApollo from "../lib/apollo";

const Home = props => {
  return (
    <Layout title="Cira App">
        <div className="section content-section pt-1">
            <div className="content">
                <div className="balance p-2">
                    <div className="left">
                        <span className="title"><b>
                          {/* {loginStatus} */}
                          </b></span>
                        <h5 className="total">Cira App - Inovasi Kemudahan Online..</h5>
						<h6>Banjarharjo | Brebes</h6>
                    </div>
                </div>
            </div>
        </div>
        <LoginRegister />
        <UserList />
    </Layout>
  )
}

export default withApollo({ ssr: true })(Home);