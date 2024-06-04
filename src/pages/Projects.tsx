/* eslint-disable react-refresh/only-export-components */
// import { Fullscreen } from "lucide-react"

import { TFunction } from "i18next"
import HeroTitle from "../common/HeroTitle"
import Tabs from "../common/Tabs"
import { withTranslation } from "react-i18next"
interface I_Props {
  className?: string,
  t: TFunction<"translation", undefined>,
}
const Projects = ({ t }: I_Props) => {


  return (
    <div  className="min-h-screen px-8">
      <HeroTitle >
        {t("projectTitle")}
      </HeroTitle>
      <Tabs />
    </div>
  )
}

export default withTranslation()(Projects)
