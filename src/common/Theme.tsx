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
        <div className="text-dark dark:text-light gap-2 border border-dark rounded-3xl flex px-5 py-1 dark:border-light outline-none">
            <button onClick={() => setDarkMode(false)}>
                <Sun />
            </button>
            <button onClick={() => setDarkMode(true)}>
                <Moon />
            </button>


            {/* <Languages/> */}
        </div>
    )
}

export default Theme
