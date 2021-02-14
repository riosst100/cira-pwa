import { useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'
import useSocket from '../../hooks/useSocket'

export default function Forum(props) {
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
            <div><b>Ruang Diskusi</b></div>
            <ul>
              {messages.map(message => (
                <li key={message.id}>{message.value}</li>
              ))}
            </ul>
            <form onSubmit={e => handleSubmit(e)}>
              <input
                onChange={e => setField(e.target.value)}
                type="text"
                placeholder="Ketik pesan.."
                value={field}
              />
              <button>Kirim</button>
            </form>
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
