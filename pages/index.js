import Link from 'next/link'
import Layout from '../components/Layout'
import LoginRegister from '../components/LoginRegister'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const API_URL = process.env.API_URL

async function getInitialProps({ req, res }) {
	if (!process.browser) {
		const Cookies = require('cookies')
			const cookies = new Cookies(req, res)
			const authToken = cookies.get('auth-token') || ''

    	const { users } = await axios
		.get(`${API_URL}/user`)
		.then((response) => response.data);
		try {

			const { user } = await axios
				.get(`${API_URL}/me`, { headers: { 'auth-token': authToken } })
				.then((response) => response.data)

			return { initialLoginStatus: 'Selamat datang, '+user.name, authToken: authToken, users: users }
		} catch (err) {
			return { initialLoginStatus: 'Selamat datang, Pengunjung', authToken: '', users: users }
		}
	}

	return { initialLoginStatus: null }
}

export default function Home({initialLoginStatus, authToken, users}) {
    const [loginStatus, setLoginStatus] = useState(initialLoginStatus || <Skeleton />)
	if (users) {
		users = users.map(user => {
			return (
				<div key={user._id}>
					<div>~ {user.name}</div>
				</div>
			);
		})
	}
	const [usersData, setUsersData] = useState(users || <Skeleton />)

	let loginRegisterComponent = <LoginRegister token={authToken} />

	const [loginRegister, setLoginRegister] = useState(loginRegisterComponent || <Skeleton />)

    async function getLoginStatus() {
		setLoginStatus(<Skeleton />)

		try {
			const { user } = await axios.get('/api/proxy/me').then((response) => response.data)

			setLoginRegister('')

			setLoginStatus('Selamat datang, '+user.name)
		} catch (err) {
			setLoginStatus('Selamat datang, Pengunjung')
		}
	}

	async function getUsers() {
		setUsersData(<Skeleton />)

		try {
			const { users } = await axios.get('/api/proxy/user').then((response) => response.data)

			setUsersData(users.map(user => {
				return (
					<div key={user._id}>
						<div>~ {user.name}</div>
					</div>
				);
			}))
		} catch (err) {
			setUsersData('')
		}
	}

	useEffect(() => {
		if (!initialLoginStatus) {
			getLoginStatus()
		}
	}, [initialLoginStatus])

	useEffect(() => {
		if (!users) {
			getUsers()
		}
	}, [users])

    return (
    <Layout title="Cira App">
        <div className="section content-section pt-1">
            <div className="content">
                <div className="balance p-2">
                    <div className="left">
                        <span className="title"><b>{loginStatus}</b></span>
                        <h5 className="total">Cira App - Inovasi Kemudahan Online..</h5>
						<h6>Banjarharjo | Brebes</h6>
                    </div>
                </div>
            </div>
        </div>
        {loginRegister}
        <div className="section mt-3">
            <div className="content">
                <div><b>Pengguna</b></div>
				<div>
                    {usersData}
                </div>
            </div>
        </div>
    </Layout>
  )
}

Home.getInitialProps = getInitialProps