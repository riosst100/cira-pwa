import Link from 'next/link'
import Layout from '../../components/LayoutSub'

export default function Register() {
  return (
    <Layout title="Daftar Jadi Member/Partner">
		<div className="section content-section pt-1">
            <div className="content">
                <div className="balance p-2">
                    <div className="left">
                        <span className="title"><b></b></span>
                        <h5 className="total">Cira App - Inovasi Kemudahan Online..</h5>
						<h6>Banjarharjo | Brebes</h6>
						<div className="text-center">
				<Link href="/register/member">
					<a>
						<button className="mr-5 bg-primary hover:bg-green-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">
							Daftar jadi Member
						</button>
					</a>
				</Link>
    	</div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
