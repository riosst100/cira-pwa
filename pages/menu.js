import Link from 'next/link'
import Layout from '../components/Layout'
import { parseCookies } from "../helpers/parseCookies"
import { useRouter } from 'next/router'
import { useCookies } from "react-cookie";

export default function Menu(props) {
    const [cookie, removeCookie] = useCookies(["cira_userid"])
    const router = useRouter()
    const current_user = props.current_user
    let name = "Pengunjung"
    if (current_user) {
        name = current_user.name
    }
    const logOut = (e) => {
        e.preventDefault()

        removeCookie("cira_userid");

        router.push('/')
    }
    return (
        <Layout title="Cira App">
            <div className="section content-section pt-1">
                <div className="content">
                    <div className="balance">
                        <div className="left">
                            <span className="title"><b>{name}</b>!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section pt-1">
                <div className="content">
                    <div>
                        <button onClick={logOut}>
                            Keluar
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Menu.getInitialProps = async ({ req }) => {
    const cookie = parseCookies(req)
    const userid = cookie.cira_userid;

    const res2 = await fetch(process.env.BASE_URL+'/api/user/'+userid);
    const { user } = await res2.json()

    return { current_user: user }
}