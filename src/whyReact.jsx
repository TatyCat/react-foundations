import './index.css'
import { createRoot } from 'react-dom/client'   
import Header from './Header'
import FooterSection from './FooterSection'
import MainSection from './MainSection'


const root=createRoot(document.getElementById("root"))
root.render(
    <>
        <Header />
        <MainSection />
        <FooterSection />
    </>
)

