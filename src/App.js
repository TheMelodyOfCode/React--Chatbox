import { ErrorBoundary } from 'react-error-boundary';

import Header from './components/header/header.component.jsx';
import Chatbox from './components/chatbox/chatbox.component.jsx'

function ErrorFallback({error, resetErrorBoundary,}) {
  return (
    <section className="chatbox">
            <h2 >Error: </h2>
            <h5 > {error.message}</h5>
    </section>
  )
}

function App() {
  return (
      <main className="container">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Header />
          <Chatbox />
        </ErrorBoundary>
      </main>
  );
}

export default App;
