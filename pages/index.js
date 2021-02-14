import Link from 'next/link'
import Layout from '../components/Layout'

function Home({ data }) {
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
            <div className="section pt-1">
                <div className="content">
                    <div>
                        <Link href="/register">
                            <a>Daftar</a>
                        </Link>
                        <Link href="/login">
                            <a>Masuk</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="section pt-1">
                <div className="content">
                    <div><b>Pengguna</b></div>
                    <div>
                        {data.data.map(user => {
                            return (
                                <div key={user._id}>
                                    <div>~ {user.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="footer mb-12 pb-3">
                <div className="footer-title">
                    Copyright © Cira App 2021. All Rights Reserved.
                </div>
                Inovasi untuk kemudahan online
            </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps() {
    const res = await fetch(process.env.BASE_URL+'/api/test')
    const data = await res.json()
  
    return { props: { data } }
}

export default Home
