import { ReactNode } from "react"

interface I_Props{
    children:ReactNode,
    className?:string
}
const HeroTitle = ({children,className}:I_Props) => {
    return (
        <h1 className={`${className} text-2xl font-semibold text-center`}>
            {children}
        </h1>
    )
}

export default HeroTitle
