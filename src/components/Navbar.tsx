import { Link } from "react-router-dom"
import Theme from "../common/Theme"
import Resume from "./Resume"
import { contactData } from "../data"
import FullscreenComponent from "../common/FullscreenComponent"
import Language from "../common/Language"
import { Menu, X } from "lucide-react"
import Sidbar from "./Sidbar"
import { useState } from "react"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header dir="ltr" className="shadow-sm dark:bg-dark bg-light text-dark dark:text-light">
      <nav className="container flex items-center justify-between py-3 mx-auto ">
        {/*  */}
        <Resume />
        <div className="items-center hidden gap-4 lg:flex ">
          {
            contactData.map((icon, id) => (

              <Link to={icon.url} target="_blank" key={id}><img src={icon.logo} loading="lazy" width={30} alt={icon.logo} /></Link>
            ))
          }
        </div>

        <div className="flex items-center justify-between w-full gap-3 px-2 lg:w-fit">
          <div className="flex px-5 py-1 border outline-none text-dark dark:text-light border-dark rounded-3xl dark:border-light">
            <Language />
          </div>
          <FullscreenComponent />
          {
            isOpen ? (<button onClick={() => {
              setIsOpen(false)
            }} className="block lg:hidden">
              <X />
            </button>):(<button onClick={() => {
              setIsOpen(true)
            }} className="block lg:hidden">
            <Menu />
          </button>)
          }
          
          <Theme />
        </div>
      </nav>


      <Sidbar className={`${isOpen ? "-translate-x-0" : "-translate-x-full"} 
      duration-1000 ease-in-out 
      col-span-12 shadow-md   lg:col-span-2 p-8 
                fixed left-0 top-[58px] h-[calc(100vh-58px)]  flex flex-col 
                items-center  bg-light dark:bg-dark text-dark
                 dark:text-light right-0 lg:hidden`} />

    </header>
  )
}

export default Navbar
