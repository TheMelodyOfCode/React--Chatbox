import * as React from 'react'

import MessagesDisplay from '../messagesDisplay/messagesDisplay.component'
import allMessages from '../../utils/allMessages'

const Chatbox =()=>{

    const messageDisplayRef = React.useRef()
    const [messages, setMessages] = React.useState(allMessages.slice(0, 8))
    const addMessage = () =>
      messages.length < allMessages.length
        ? setMessages(allMessages.slice(0, messages.length + 1))
        : null
    const removeMessage = () =>
      messages.length > 0
        ? setMessages(allMessages.slice(0, messages.length - 1))
        : null
  
    const scrollToTop = () => messageDisplayRef.current.scrollToTop()
    const scrollToBottom = () => messageDisplayRef.current.scrollToBottom()
  
    return (
        <section className="chatbox">
            
            <div className="chatbox__btnBox">
                <button className="chatbox__btnBox__addBtn btn" onClick={addMessage}>add message</button>
                <button className="chatbox__btnBox__removeBtn btn" onClick={removeMessage}>remove message</button>
            </div>
            <hr />
            <div className="chatbox__scrollToTopBox">
                <button className="chatbox__scrollToTopBox-btn btn--blue " onClick={scrollToTop}>scroll to top</button>
            </div>
            <MessagesDisplay ref={messageDisplayRef} messages={messages} />
            <div className="chatbox__scrollToBottomBox">
                <button className="chatbox__scrollToBottomBox-btn btn--blue" onClick={scrollToBottom}>scroll to bottom</button>
            </div>
        </section>
    )
  }



export default Chatbox;
