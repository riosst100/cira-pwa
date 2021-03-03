import Layout from '../components/Layout'
import axios from 'axios'
import { useEffect, useState } from 'react'

const API_URL = process.env.API_URL

export default function Menu({initialLoginStatus}) {
    const [loginStatus, setLoginStatus] = useState(initialLoginStatus || 'Loading...')

    async function getLoginStatus() {
		setLoginStatus('Loading...')

		try {
			const { user } = await axios.get('/api/proxy/me').then((response) => response.data)

			setLoginStatus(`Logged in as ${user.name}`)
		} catch (err) {
			setLoginStatus('Not logged in')
		}
	}

    return (
        <Layout title="Cira App">
            <div className="section content-section pt-1">
                <div className="content">
                    <div className="balance">
                        <div className="left">
                            <span className="title"><b>{loginStatus}</b>!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section pt-1">
                <div className="content">
                    <div>
                        <a href="/logout">
                            Keluar
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Menu.getInitialProps = async ({ req, res }) => {
	if (!process.browser) {
		try {
			const Cookies = require('cookies')
			const cookies = new Cookies(req, res)
			const authToken = cookies.get('auth-token') || ''

			const { user } = await axios
				.get(`${API_URL}/me`, { headers: { 'auth-token': authToken } })
				.then((response) => response.data)

			return { initialLoginStatus: user.name }
		} catch (err) {
			return { initialLoginStatus: 'Pengunjung' }
		}
	}

	return { initialLoginStatus: null}
}