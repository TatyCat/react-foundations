import './index.css'
import {createRoot} from 'react-dom/client'
import Navbar from './components/Navbar2'
import Main from './components/Main2'


function Section(){
    return(
        <section className='app'>
        <Navbar/> 
        <Main /> 
        </section>   
    )
}
const root = createRoot(document.getElementById('root'))
root.render(
    <>
    <Section />
    </>
)