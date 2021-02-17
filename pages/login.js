import Layout from '../components/LayoutSub'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCookies } from "react-cookie"

export default function Login() {
    const router = useRouter()
    const [cookie, setCookie] = useCookies(["cira_userid"])
    const login  = async event => {
        event.preventDefault()

        const res = await fetch(process.env.BASE_URL+'/api/user/login', 
            {
                body: JSON.stringify({
                    phone: event.target.phone.value,
                    password: event.target.password.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
      
        const result = await res.json()

        if (result.data) {
            setCookie("cira_userid", result.data[0]._id, {
                path: "/",
                maxAge: 2147483647,
                sameSite: true,
            })

            router.push('/')
        }
    }

    return (
        <Layout title="Masuk ke Cira App">
            <div className="flex items-center justify-center">
                <form onSubmit={login} className="w-full bg-white shadow-md rounded px-5 pt-6 pb-8">
                    <input type="text" autoComplete="username" style={{ display: "none" }} />
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
                            name="password" id="password" type="password" autoComplete="new-password" required/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button id="submit"
                            className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            <i className="fab fa-whatsapp"></i> Masuk
                        </button>
                    </div>
                    <div>Belum punya akun? <Link href="/register"><a>Daftar</a></Link></div>
                </form>
            </div>
        </Layout>
    )
}