import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import { getAllItemsfromDB } from './utils/firebase.utils'
import { useAsync } from './utils/helperFunctions.utils'

import Header from './components/header/header.component.jsx';
import Chatbox from './components/chatbox/chatbox.component.jsx'
import PendingBox from './components/pendingBox/pendingBox.component';


function ErrorFallback({error, resetErrorBoundary,}) {
  return (
      <section  className="cardItemError">
          <div role="alert" className="cardItemError__card">
              <img className="cardItemError__card__img" src='img/sadError.png'  alt='error' />
              <h1 className="cardItemError__card__title">There was an error: {''}</h1>
              <p className="cardItemError__card__text">
                  {error.message}
              </p> 
              <button className="cardItemError__errorBtn" onClick={resetErrorBoundary}>Try again</button> 
          </div>
      </section>
  )
}


function App() {

  const {data: allFromDB, status, error, run} = useAsync({ 
    status: 'idle' ,
  })

    React.useEffect(()=>{
      const getCardItem = async ()=> {
        const allFromDB = await getAllItemsfromDB()
        return allFromDB.items.map((m, i) => ({id: i, author: m.split(': ')[0], content: m.split(': ')[1]}))
    };
    run(getCardItem())
        
    }, [run])

  switch (status) {
    case 'idle':
      return <span className="chatbox" style={{color: 'white'}}>IDLE</span>
    case 'pending':
      return (
      <main className="container">
          <Header />
          <PendingBox />
      </main>
      ) 
    case 'resolved':
  return (
      <main className="container">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Header />
            <Chatbox allFromDB={allFromDB} status={status}/>
        </ErrorBoundary>
      </main>
  )
  case 'rejected':
    throw error
  default:
    throw new Error('This should be impossible')
}

}

export default App;
