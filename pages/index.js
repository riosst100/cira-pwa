import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Layout from '../components/Layout'
import LoginRegister from '../components/LoginRegister'

export default function Home({ launches }) {
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
        <div className="section mt-3">
            <div className="content">
                <div><b>Pengguna</b></div>
        {launches.map(user => {
            return (
              <div key={user.id}>
                { user.name }
              </div>
            );
          })}
            </div>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.SERVER_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query getAllUser {
      users {
        id
        name
      }
    }
    `
  });

  return {
    props: {
      launches: data.users
    }
  }
}