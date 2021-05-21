import Layout from '@/components/layoutSub'
import { HeadsetOutline } from 'react-ionicons'

export default function HelpIndex() {
    return (
        <Layout title="Bantuan">
            <div style={{ "marginTop": "5px" }}>
                <div className="section" style={
                    {
                        "color":"#27173E",
                        "cursor": "pointer"
                    }
                }>
                    <div className="p-3" style={{"backgroundColor":"white"}}>
                        <HeadsetOutline
                            color={'#27173E'} 
                            height="22px"
                            width="22px"
                        /> <span style={{ "marginLeft": "5px" }}>Live Chat CS</span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}