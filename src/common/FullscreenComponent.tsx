import { Fullscreen } from "lucide-react"
import { useEffect, useState } from "react";

const FullscreenComponent = () => {


    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleFullscreenToggle = () => {
        if (!isFullscreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    const handleFullscreenChange = () => {
        setIsFullscreen(document.fullscreenElement != null);
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        };
    }, []);

    return (
        <button onClick={handleFullscreenToggle} >
            <Fullscreen />
        </button>
    );
}



export default FullscreenComponent
