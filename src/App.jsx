import { useState } from 'react'
import './App.css'
import Hero from './components/custom/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
  
    </>
  )
}

export default App


// import './App.css';
// import Hero from './components/custom/Hero';

// function App() {
//   return (
//     <>
//       <Hero />
//     </>
//   );
// }

// export default App;