/* eslint-disable react-refresh/only-export-components */

import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';



const About = ({t}:{t:TFunction<"translation", undefined>}) => {
  
  return (
    <div>
      <h1 className="py-5 text-center">About</h1>
      <p>{t("Welcome to React")}</p>
      
      <h2 className="text-2xl font-semibold text-center">
        {t("teat")}
        
        </h2>

    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default withTranslation()(About)
