import { useState } from 'react'
import ContactForm from './components/ContactForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ContactForm />
    </div>
  )
}

export default App
