import Link from 'next/link'
import Layout from '../../components/LayoutSub'
import { useRouter } from 'next/router'
import NProgress from '../../components/nprogress';

const API_URL = process.env.API_URL

export default function RegisterMember() {
    const router = useRouter()
    
    async function registerMember(e) {
		e.preventDefault()

        NProgress.start()

        const name = e.target.querySelector('[name="name"]').value
        const call_name = e.target.querySelector('[name="call_name"]').value
		const birthdate = e.target.querySelector('[name="birthdate"]').value
		const phone = e.target.querySelector('[name="phone"]').value
		const password = e.target.querySelector('[name="password"]').value

		try {
			
		} catch (err) {
			console.error('Request failed:' + err.message)
		}

        router.push('/')
	}

    return (
        <Layout title="Cira App">
            <div className="flex items-center justify-center">
            <form onSubmit={registerMember} className="w-full bg-white shadow-md rounded px-5 pt-6 pb-8">
                <div className="text-center"><img className="mx-auto" src="/img/logo/cira_trans_colored.webp" style={{ width: '70px' }} /></div>
                <h1 className="mt-2 block text-gray-700 font-bold mb-2 text-xl text-center">Daftar jadi member Cira</h1>
                <br/>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Nama Lengkap
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="name" id="name" type="text" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Nama Panggilan
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="call_name" id="call_name" type="text" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Tanggal Lahir
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="birthdate" id="birthdate" type="date" placeholder="Ingresa tu Fecha de Nacimiento" required/>
                </div>
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
                    <div>Tentukan password untuk akun member kamu.</div>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="password" id="password" type="password" required/>
                </div>
                <div className="flex items-center justify-between">
                    <button id="submit"
                        className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        <i className="fab fa-whatsapp"></i> Daftar Sekarang
                    </button>
                </div>
                <div>Sudah punya jadi member? <Link href="/login"><a>Login</a></Link></div>
            </form>
        </div>
        
        </Layout>
    )
}
