import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/LayoutSub'
import NProgress from '../components/nprogress';

const API_URL = process.env.API_URL

export default function Login() {
	const router = useRouter()

	async function onSubmit(e) {
		e.preventDefault()

		NProgress.start()

		const phone = e.target.querySelector('[name="phone"]').value
		const password = e.target.querySelector('[name="password"]').value

		try {
			await axios.post('/api/proxy/user/login', { phone, password })

			router.push('/')
		} catch (err) {
			console.error('Request failed:' + err.message)
		}
	}

	return (
		<Layout title="Cira App">
			<div className="flex items-center justify-center">
				<form onSubmit={onSubmit} className="w-full bg-white shadow-md rounded px-5 pt-6 pb-8">
					<div className="text-center"><img className="mx-auto" src="https://brebes-social.id/assets/images/logo/cira-blue.png" style={{ width: '70px' }} /></div>
					<h1 className="mt-2 block text-gray-700 font-bold mb-2 text-xl text-center">Masuk ke Cira App</h1>
					<br/>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Nomor HP
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="phone" id="phone" type="number" required/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="password" id="password" type="password" required/>
					</div>
					<div className="flex items-center justify-between">
						<button id="submit"
							className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit">
								Masuk
						</button>
					</div>
					<div>Belum punya akun? <Link href="/register"><a>Daftar</a></Link></div>
				</form>
        	</div>
		</Layout>
	)
}