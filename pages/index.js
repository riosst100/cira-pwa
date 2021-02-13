import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home({ users }) {
  return (
    <Layout title="Cira App">
        <div id="content-container">
            <div className="section content-section pt-1">
                <div className="content">
                    <div className="balance">
                        <div className="left">
                            <span className="title">Selamat Datang, Pengunjung!</span>
                            <h5 className="total">Silahkan Daftar/Masuk ya..</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer mb-12 pb-3">
                <div className="footer-title">
                    Copyright © Cira App 2021. All Rights Reserved.
                </div>
                Inovasi untuk kemudahan online
            </div>

            {/* Data */}
            <div className="notes-container">
      <h1>Notes</h1>
      <div className="grid wrapper">
        {users.map(note => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <a>{note.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
        </div>
    </Layout>
  )
}

Home.getInitialProps = async () => {
    const res = await fetch('/api/test');
    const { data } = await res.json();
  
    return { users: data }
}
