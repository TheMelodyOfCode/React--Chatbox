
import * as React from 'react'

// because this is wrapped in a React.forwardRef, it accepts `ref` as the second argument
const MessagesDisplay = React.forwardRef( function MessagesDisplay({messages}, ref) {
  const containerRef = React.useRef()
  React.useLayoutEffect(() => {
    scrollToBottom()
  })
  
  function scrollToTop() {
    containerRef.current.scrollTop = 0
  }

  function scrollToBottom() {
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  }
  /**
   * @param {object} ref
   * @returns the ref object with scrollToTop and scrollToBottom */
  React.useImperativeHandle(ref, ()=> ({
    scrollToTop,
    scrollToBottom,
  }))

  return (
    <div className="chatbox__box" ref={containerRef} role="log">
      {messages.map((message, index, array) => (
        <div className="chatbox__box__messages" key={message.id}>
          <span className="chatbox__box__messages--author"><strong>{message.author}</strong>:</span> 
          <span className="chatbox__box__messages--content">{message.content}</span>
          {array.length - 1 === index ? null : <hr />}
        </div>
      ))}
    </div>
  )
})


export default MessagesDisplay;