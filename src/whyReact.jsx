import './index.css'
import { createRoot } from 'react-dom/client'   


function NavBar() {
    return(
    <ul className='nav-list'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    )
}
function FooterSection(){
    return (
    <footer>
        <p>2024 Tatyanna Development. All rights reserved.</p>
    </footer>
    )
}

function Page(){
    return(
    <>
    <NavBar />
    <h1 className='reasons-header'>Reasons why I'm excited to learn React</h1>
    <ol>
        <li>React is a popular library</li>
        <li>I'm likely to get a job with React</li>
        <li>React can be used to build apps</li>
    </ol>
    <FooterSection />
    </>
    )
}

const root=createRoot(document.getElementById("root"))
root.render(
    <main>
        <Page />
    </main>
)

