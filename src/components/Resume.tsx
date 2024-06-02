/* eslint-disable react-refresh/only-export-components */

import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';

const Resume =  ({t}:{t:TFunction<"translation", undefined>}) => {
  return (
    <button className="hidden capitalize border-none outline-none lg:block">
      {t("resume")}
    </button>
  )
}

export default withTranslation()(Resume)



