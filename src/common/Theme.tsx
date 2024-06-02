import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react";

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);
    return (
        <div className="flex px-5 py-1 border outline-none text-dark dark:text-light border-dark rounded-3xl dark:border-light">
                <button onClick={() => setDarkMode(false)} className="border-r pe-2 border-r-main"><Sun /></button>
                <button onClick={() => setDarkMode(true)} className=" ps-2"><Moon /></button>
        </div>
    )
}

export default Theme
