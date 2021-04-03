import Layout from '../components/Layout'

export default function Menu() {

    return (
        <Layout title="Cira App">
            <div className="section content-section pt-1">
                <div className="content">
                    <div className="balance">
                        <div className="left">
                            <span className="title"><b></b>!</span>
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