import Link from 'next/link'
import Layout from '../components/Layout'
import LoginRegister from '../components/LoginRegister'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const API_URL = process.env.API_URL

async function getInitialProps({ req, res }) {
	if (!process.browser) {
		try {
			const Cookies = require('cookies')
			const cookies = new Cookies(req, res)
			const authToken = cookies.get('auth-token') || ''

			const { user } = await axios
				.get(`${API_URL}/me`, { headers: { 'auth-token': authToken } })
				.then((response) => response.data)

			return { initialLoginStatus: user.name, authToken: authToken }
		} catch (err) {
			return { initialLoginStatus: 'Pengunjung', authToken: '' }
		}
	}

	return {}
}

export default function Home({initialLoginStatus, authToken}) {
    const [loginStatus, setLoginStatus] = useState(initialLoginStatus || <Skeleton />)

	let welcomeMsg = <span>Selamat Datang, <b>{loginStatus}</b>!</span>
	let loginRegisterComponent = <LoginRegister token={authToken} />

	const [loginRegister, setLoginRegister] = useState(loginRegisterComponent || <Skeleton />)

    async function getLoginStatus() {
		setLoginStatus(<Skeleton />)

		try {
			const { user } = await axios.get('/api/proxy/me').then((response) => response.data)

			setLoginRegister('')

			setLoginStatus(user.name)
		} catch (err) {
			setLoginStatus('Pengunjung')
		}
	}

	useEffect(() => {
		if (!initialLoginStatus) {
			getLoginStatus()
		}
	}, [initialLoginStatus])
    return (
    <Layout title="Cira App">
        <div className="section content-section pt-1">
            <div className="content">
                <div className="balance">
                    <div className="left">
                        <span className="title">{welcomeMsg}</span>
                        <h5 className="total">Silahkan Daftar/Masuk ya..</h5>
                    </div>
                </div>
            </div>
        </div>
        {loginRegister}
        <div className="section pt-1">
            <div className="content">
                <div><b>Pengguna</b></div>
            </div>
        </div>
    </Layout>
  )
}

Home.getInitialProps = getInitialProps