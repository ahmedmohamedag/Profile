/* eslint-disable react-refresh/only-export-components */
import { ChevronsDown, ChevronsUp } from "lucide-react"
import { projectsData, tabsTitle } from "../data"
import { TFunction } from "i18next"
import { useState } from "react"
import { withTranslation } from "react-i18next"
import { Link } from "react-router-dom"
interface I_Props {
    t: TFunction<"translation", undefined>,
}
const Tabs = ({ t }: I_Props) => {
    const [type, setType] = useState("all")
    const [overLay, setOverLay] = useState(false)
    const [projectTypsView, setProjectTypsView] = useState(false)
    const changeTypeHandler = (type: string) => {
        setType(type)
    }
    const overLayHandler = (isView: boolean) => {
        setOverLay(isView)
    }
    return (

        <div>
            <button onClick={()=>{
                !projectTypsView ? setProjectTypsView(true) : setProjectTypsView(false)
            }} 
            className="flex items-center justify-between w-full p-3 border cursor-pointer sm:hidden mt-7 rounded-2xl">
                <span className="text-xl">{t("projects typs")}</span>
                <div className="animate-bounce">
                    {
                        projectTypsView ? (<ChevronsUp color="#49f15f" size={30}/>)
                        :(<ChevronsDown color="#49f15f" size={30}/>)
                    }
                
                </div>
            </button>
            
            <div dir="ltr" className={`${projectTypsView ? "block":"hidden"}  sm:block text-center`}>
                <div className="border-b border-gray-200 ">
                    <nav className="flex flex-col items-center justify-center -mb-px md:flex-row md:gap-6">
                        {
                            tabsTitle.map((tab, id) => (
                                <button key={id}
                                    onClick={() => {
                                        changeTypeHandler(tab.title)
                                    }}
                                    className={`
                                    ${type == tab.title ? "text-main" : ""}
                                    shrink-0 border border-transparent p-3 text-md font-medium text-gray-500 hover:text-main md:mt-8 capitalize`}
                                >{tab.title}
                                    <span className="px-2 text-indigo-600">
                                        {
                                            tab.title == "all" ? projectsData.length :
                                                (
                                                    projectsData.filter(item => item.type === tab.title).length
                                                )
                                        }</span>
                                </button>
                            ))
                        }
                    </nav>
                </div>
            </div>

            
            <div className="grid grid-cols-1 gap-3 mt-8 lg:grid-cols-3 md:grid-cols-2">
                {
                    projectsData.map((item, id) => (
                        type == item.type ? (
                            <div key={id} className="flex flex-col items-center justify-center p-3 shadow-2xl rounded-2xl ">
                                <div className="overflow-hidden rounded-t-2xl">
                                    <img src={item.image} loading="lazy" alt={item.title} className="duration-500 lg:hover:scale-110" />
                                </div>
                                <h2 className="pt-3 text-xl capitalize">{item.title}</h2>
                                <div className="grid w-full grid-cols-2 gap-3 pt-4 text-xl text-center">
                                    <Link to={item.demo} target="_blank" className="duration-500 border border-transparent rounded-md bg-main hover:text-main hover:bg-transparent hover:border hover:border-main ">Demo</Link>
                                    <Link to={item.repo} target="_blank" className="duration-500 border rounded-md text-main hover:bg-main hover:text-light border-main">Repo</Link>
                                </div>
                            </div>
                        ) :
                            type == "all" ? (
                                <div key={id} className="flex flex-col items-center justify-center p-3 shadow-2xl rounded-2xl ">
                                    <div onClick={()=>{
                                        overLayHandler(true)
                                    }} className="overflow-hidden cursor-pointer rounded-t-2xl">
                                        <img src={item.image} loading="lazy" alt={item.title} className="duration-500 lg:hover:scale-110" />
                                    </div>
                                    
                                    <h2 className="pt-3 text-xl capitalize">{item.title}</h2>
                                    <div className="grid w-full grid-cols-2 gap-3 pt-4 text-xl text-center">
                                        <Link to={item.demo} target="_blank" className="duration-500 border border-transparent rounded-md bg-main hover:text-main hover:bg-transparent hover:border hover:border-main ">Demo</Link>
                                        <Link to={item.repo} target="_blank" className="duration-500 border rounded-md text-main hover:bg-main hover:text-light border-main">Repo</Link>
                                    </div>
                                    {/* OverLay */}
                                    <div id="overLay" className={`${overLay ? "fixed":"hidden"} inset-0  z-[999]` }>
                                        
                                    </div>
                                    
                                </div>
                            ) : ("")
                    ))}
            </div>
        </div >
    )
}
export default withTranslation()(Tabs)
