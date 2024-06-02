/* eslint-disable react-refresh/only-export-components */

import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';

const Contact = ({t}:{t:TFunction<"translation", undefined>}) => {

  return (
    <div className='h-[calc(100vh)]'>
      <h1 className='text-3xl text-center py-6 font-semibold text-main'>{t("soon")}</h1>
    </div>
  )
}

  
  export default withTranslation()(Contact)
  