/* eslint-disable react-refresh/only-export-components */

import { NavLink } from 'react-router-dom';
// import { navlinks } from '../data';
import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { navlinks } from '../data';
interface I_Props {
  className?: string,
  t: TFunction<"translation", undefined>,
}
const Sidbar = ({ className, t }: I_Props) => {
  return (
    <aside className={`${className}`}>
      <div className="flex flex-col items-center">
        <img src="logo.png" alt="" width={130} />
        <h1 className='text-xl text-center'>{t("name")}</h1>
        <h2 className='text-sm text-center dark:text-slate-300 text-[#a09f9f]'>{t("position")}</h2>
        <h2 className='text-sm text-center dark:text-slate-300 text-[#7c7a7a]' dir='ltr'>+201151101537</h2>
        
      </div>

      <ul className='flex flex-col items-center gap-3 px-10 mt-5 '>
        
          {
            navlinks.map((link,id)=>(
              <NavLink key={id} to={link.path}className='text-2xl capitalize hover:text-main'>{t(link.title)}</NavLink>

            ))
          }
        
      </ul>
    </aside>
  )
}

export default withTranslation()(Sidbar)
