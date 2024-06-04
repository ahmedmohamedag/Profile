/* eslint-disable react-refresh/only-export-components */

// import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import Linkes from '../components/Linkes';
// {t}:{t:TFunction<"translation", undefined>}
const Contact = () => {

  return (
    <div className='flex items-start pt-24'>
      <Linkes flexdie='flex-col' status='flex'/>
    </div>
  )
}

  
  export default withTranslation()(Contact)
  