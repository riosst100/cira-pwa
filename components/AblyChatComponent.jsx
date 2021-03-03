import React, { useEffect, useState } from 'react';
import { useChannel } from "./AblyReactEffect";
import styles from './AblyChatComponent.module.css';

const AblyChatComponent = () => {

  let inputBox = null;
  let messageEnd = null;

  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const messageTextIsEmpty = messageText.trim().length === 0;

  const [channel, ably] = useChannel("chat-demo", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const sendChatMessage = (messageText) => {
    channel.publish({ name: "chat-message", data: messageText });
    setMessageText("");
    inputBox.focus();
  }

  const handleFormSubmission = (event) => {
    event.preventDefault();
    sendChatMessage(messageText);
  }

  const handleKeyPress = (event) => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  }

  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";
    return <span key={index} className={styles.message} data-author={author}>{message.data}</span>;
  });

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <div className={styles.chatHolder}>
      <div className={styles.chatText}>
        {messages}
        <div ref={(element) => { messageEnd = element; }}></div>
      </div>
      <form onSubmit={handleFormSubmission} className={styles.form}>
        <textarea
          ref={(element) => { inputBox = element; }}
          value={messageText}
          placeholder="Ketik pesan..."
          onChange={e => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.textarea}
          rows="1"
        ></textarea>
        <button type="submit" className={styles.button} disabled={messageTextIsEmpty}>Kirim</button>
      </form>
      <form onSubmit={handleFormSubmission} style={
        { 
          "backgroundColor": "white",
          "position": "fixed",
          "bottom": 0,
          "right": 0,
          "left": 0,
          "zIndex": 1030,
          "width": "100%"
        }
      }>
        <div className="form-group p-0 mb-0" style={
          {
            "backgroundColor": "#7cbdcb"
          }
        }>
          <table style={{"width": "100%"}}>
            <tbody>
              <tr>
                <td className="pl-1 pb-1 pt-1" style={
                  { 
                    "width": "100%",
                    "textAlign": "center"
                  }
                } colSpan="4">
                  <div className="input-group mr-1">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="show_emoticon_btn" style={
                          { 
                            "borderBottomLeftRadius": "20px",
                            "borderTopLeftRadius": "20px",
                            "backgroundColor": "white",
                            "border": "1px solid #65b3d8",
                            "paddingRight": 0
                          }
                        }>
                        <i className="far fa-grin" style={
                          {   
                            "fontSize":"25px","color":"grey","margin": 0
                          }
                        }></i>
                      </span>
                      <span className="input-group-text" id="hide_emoticon_btn" style={
                          { 
                            "borderBottomLeftRadius": "20px",
                            "borderTopLeftRadius": "20px",
                            "backgroundColor": "white",
                            "border": "1px solid #65b3d8v",
                            "paddingRight": 0,
                            "display": "none"
                          }
                        }>
                        <i className="far fa-grin" style={
                          { 
                            "fontSize":"25px","color":"#12b2ff"
                          }
                        }></i>
                      </span>
                    </div>
                    <textarea rows="1" className="form-control" id="message" placeholder="Ketik pesan.." style={
                          { 
                            "fontSize": "16px !important",
                            "padding": "9px",
                            "border": "1px solid #65b3d8",
                            "borderLeft": "none !important",
                            "borderRight": "none !important"
                          }
                        }></textarea>
                    <div className="input-group-append">
                      <span className="input-group-text" id="show_emoticon_btn" style={
                          { 
                            "borderBottomRightRadius": "20px",
                            "borderTopRightRadius": "20px",
                            "backgroundColor": "white",
                            "border": "1px solid #65b3d8",
                            "borderLeft":"none",
                            "paddingRight": "15px"
                          }
                        }>
                        <i className="fas fa-paperclip" style={
                          { 
                            "fontSize":"20px","color":"grey","margin": 0
                          }
                        }></i>
                      </span>
                    </div>
                  </div>
                </td>
                <td style={
                  {
                    "width": "22%",
                    "textAlign": "right"
                  }
                } className="pb-1">
                  <div className="btn btn-primary mr-1" style={
                          { 
                            "border": "1px solid #65b3d8",
                            "width": "45px",
                            "height": "45px",
                            "padding": "7px 10px",
                            "borderRadius": "25px",
                            "textAlign": "center"
                          }
                        }>
                    <img src="/img/icon/send_chat.webp" style={
                      { 
                        "width":"20px","marginLeft":"4px","marginTop": "7px"
                      }
                    } />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  )
}

export default AblyChatComponent;