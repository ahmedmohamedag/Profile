import { Outlet } from "react-router-dom"

import { Fragment } from "react/jsx-runtime"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidbar from "../components/Sidbar"

const RoutLatout = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="grid lg:grid-cols-12">
                <Sidbar className="col-span-12 shadow-md hidden  lg:col-span-2 p-8 
                sticky left-0 top-[58px] h-[calc(100vh-58px)]  lg:flex flex-col 
                items-center  bg-light dark:bg-dark text-dark
                 dark:text-light right-0" />
                <div className="col-span-12 p-8 lg:col-span-10 dark:bg-dark2 text-dark dark:text-light">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default RoutLatout
