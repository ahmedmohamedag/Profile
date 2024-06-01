import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import RoutLatout from "../pages/Layout"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from './../pages/Contact';
import Services from "../pages/Services"
import Notfound from "../pages/Notfound"


const router = createBrowserRouter((createRoutesFromElements(
    <>
        <Route path="/" element={<RoutLatout />}>
            <Route index element={<Projects />}/>
            <Route path="about" element={<About />}/>
            <Route path="services" element={<Services />}/>
            <Route path="contact" element={<Contact />}/>
        </Route>
        <Route path="*" element={<Notfound/>}/>
    </>
)))



export default router