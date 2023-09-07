import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
function RouteCompo(){
    return(
        <>
        <BrowserRouter>
        <div className="navbar">
         <Link to='/' className="home">Home</Link>
         <Link to='/student' className="std">Students</Link>
         <Link to='/contact-us' className="cont">Contact Us</Link>
         </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Student' element={<Student/>}/>
            <Route path='/Contact-us' element={<Contact/>}/>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}
export default RouteCompo