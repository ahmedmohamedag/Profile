import { Link } from "react-router-dom"
import Theme from "../common/Theme"
import Resume from "./Resume"
import { contactData } from "../data"
import FullscreenComponent from "../common/FullscreenComponent"

const Navbar = () => {
  return (
    <header className="dark:bg-dark bg-light text-dark dark:text-light shadow-sm">
      <nav className="container flex items-center justify-between py-3 mx-auto">
        {/*  */}
        <Resume/>
        <div className="flex items-center gap-4">
          {
            contactData.map((icon,id)=>(

              <Link to={icon.url} target="_blank" key={id}><img src={icon.logo} loading="lazy" width={30} alt={icon.logo}/></Link>
            ))
          }
        </div>
        <div className="flex items-center gap-3 ">
        <FullscreenComponent/>
        <Theme/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
