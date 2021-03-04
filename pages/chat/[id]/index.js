import dynamic from 'next/dynamic'
import Layout from '../../../components/LayoutSubInfinity'

const ChatComponent = dynamic(() => import('../../../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  return (
    
    <Layout title="Cira App">
      <div className="container">
        <ChatComponent />

      <style jsx>{`
        main {
          display: grid;
          grid-template-rows: auto 1fr;
          width: calc(100% - 40px);
          max-width: 900px;
          margin: 20px auto;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.2);
          background-color: white;
        }
       
      `}</style>

      <style jsx global>{`
        [data-author="me"] {
          background: linear-gradient(to right, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 0!important;
          border-bottom-left-radius: 10px!important;
        }
        
      `}</style>
    </div>
    </Layout>
    
  )
}