import { Outlet } from "react-router-dom"

import { Fragment } from "react/jsx-runtime"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidbar from "../components/Sidbar"

const RoutLatout = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="grid grid-cols-12">
                <div className="col-span-2 shadow-md">
                    <Sidbar />
                </div>
                <div className="col-span-10 p-8 dark:bg-dark2 text-dark dark:text-light">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default RoutLatout
