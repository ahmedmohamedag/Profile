import { Link } from "react-router-dom"
import { contactData } from "../data"

const Linkes = () => {
    return (
        <div className="items-center hidden gap-4 lg:flex flex-col  fixed right-5 top-1/2 -translate-y-1/2 z-[888]  ">
            {
                contactData.map((icon, id) => (

                    <Link to={icon.url} target="_blank" key={id}><img src={icon.logo} loading="lazy" width={30} alt={icon.logo} className="hover:scale-125 duration-300"/></Link>
                ))
            }
        </div>

    )
}

export default Linkes
