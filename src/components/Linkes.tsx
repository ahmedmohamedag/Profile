import { Link } from "react-router-dom"
import { contactData } from "../data"

const Linkes = () => {
    return (
        <div className="items-center hidden gap-4 lg:flex ">
            {
                contactData.map((icon, id) => (

                    <Link to={icon.url} target="_blank" key={id}><img src={icon.logo} loading="lazy" width={30} alt={icon.logo} className="duration-300 hover:scale-125"/></Link>
                ))
            }
        </div>

    )
}

export default Linkes
