import './index.css'

import {createRoot} from 'react-dom/client'

function Header() {
  return (
    <main>
      <header>
        <img src="src/assets/react-logo.png" alt="react logo" />
        <h1>ReactFacts</h1>
      </header>
    </main>
  )
}

function MainSection(){
  return(
    <section>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps </li>
      </ul>
  </section>
)
}

const root = createRoot(document.getElementById('root'))
root.render(
  <main>
    <Header />  
    <MainSection />
  </main>
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import {createRoot} from 'react-dom/client'
// const root = createRoot(document.getElementById('root'))
// root.render(
//   <ul id="list">
//     <li>Be hackathon ready</li>
//     <li>Be job ready</li>
//     <li>create mobile apps with react native</li>
//   </ul>)

// const h1 = document.createElement('h1')
// h1.textContent = 'This is imperative coding'
// h1.className = 'header'
// document.getElementById('root').appendChild(h1)