import Link from 'next/link'
import Layout from '../../components/LayoutSub'

export default function Register() {
  return (
    <Layout title="Daftar Jadi Member/Partner">
		<div className="text-center">
			<div>
				<Link href="/register/member">
					<a>Daftar jadi Member</a>
				</Link>
			</div>
			<div>
				<Link href="/register/partner">
					<a>Daftar jadi Partner</a>
				</Link>
			</div>
    	</div>
    </Layout>
  )
}
