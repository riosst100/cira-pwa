import Link from 'next/link'
import Layout from '../../components/LayoutSub'

export default function Register() {
  return (
    <Layout title="Register">
		<div className=" flex items-center justify-center">
			<Link href="/register/member/data">
				<a>Daftar jadi Member</a>
			</Link>
    	</div>
    </Layout>
  )
}
