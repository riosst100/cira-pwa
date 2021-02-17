import Link from 'next/link'
import Layout from '../components/Layout'
import { parseCookies } from "../helpers/parseCookies"

export default function Home(props) {
    const current_user = props.current_user
    let name = "Pengunjung"
    if (current_user) {
        name = current_user.name
    }
  return (
    <Layout title="Cira App">
        <div className="section content-section pt-1">
            <div className="content">
                <div className="balance">
                    <div className="left">
                        <span className="title">Selamat Datang, <b>{name}</b>!</span>
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
                    {props.users.map(user => {
                        return (
                            <div key={user._id}>
                                <div>~ {user.name}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </Layout>
  )
}

Home.getInitialProps = async ({ req }) => {
    const res = await fetch(process.env.BASE_URL+'/api/user/');
    const { data } = await res.json();

    const cookie = parseCookies(req)
    const userid = cookie.cira_userid;

    const res2 = await fetch(process.env.BASE_URL+'/api/user/'+userid);
    const { user } = await res2.json()

    return { users: data, current_user: user }
}
