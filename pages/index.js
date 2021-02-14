import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import useSocket from '../hooks/useSocket'

export default function Home(props) {
    const [field, setField] = useState('')
    const [newMessage, setNewMessage] = useState(0)
    const [messages, setMessages] = useState(props.messages || [])
  
    const socket = useSocket('chat', message => {
      setMessages(messages => [...messages, message])
    })
  
    useSocket('chat', () => {
      setNewMessage(newMessage => newMessage + 1)
    })
  
    const handleSubmit = event => {
      event.preventDefault()
  
      // create message object
      const message = {
        id: new Date().getTime(),
        value: field,
      }
  
      // send object to WS server
      socket.emit('chat', message)
      setField('')
      setMessages(messages => [...messages, message])
    }
  return (
    <Layout title="Cira App">
        <div id="content-container">
            <div className="section content-section pt-1">
                <div className="content">
                    <div className="balance">
                        <div className="left">
                            <span className="title">Selamat Datang, Pengunjung!</span>
                            <h5 className="total">Silahkan Daftar/Masuk ya..</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section pt-1">
                <div className="content">
                    <div>
                        <Link href="/register">
                            <a>Daftar</a>
                        </Link>
                        <Link href="/login">
                            <a>Masuk</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="section pt-1">
                <div className="content">
                    <div><b>Pengguna</b></div>
                    <div>
                        {props.users.map(user => {
                            return (
                                <div key={user._id}>
                                    <div>~ {user.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="footer mb-12 pb-3">
                <div className="footer-title">
                    Copyright © Cira App 2021. All Rights Reserved.
                </div>
                Inovasi untuk kemudahan online
            </div>
        </div>
    </Layout>
  )
}

Home.getInitialProps = async () => {
    const res = await fetch(process.env.BASE_URL+'/api/test');
    const { data } = await res.json();
  
    return { users: data }
}
