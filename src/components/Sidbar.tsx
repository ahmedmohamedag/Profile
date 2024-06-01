
import { NavLink } from 'react-router-dom';
import { navlinks } from '../data';
interface I_Props {
  className?: string
}
const Sidbar = ({ className }: I_Props) => {
  return (
    <aside className={`${className} p-8 sticky left-0 top-[58px] h-[calc(100vh-58px)]  flex flex-col items-center  bg-light dark:bg-dark text-dark dark:text-light`}>
      <div className="flex flex-col items-center">
        <img src="logo.png" alt="" width={130} />
        <h1 className='text-xl text-center'>Ahmed Mohamed</h1>
        <h2 className='text-sm text-center dark:text-slate-300 text-[#a09f9f]'>Front-End Developer</h2>

      </div>

      <ul className='flex flex-col items-center gap-3 px-10 mt-5 '>
        {
          navlinks.map((link, id) => (

            <NavLink key={id} to={link.path} className='text-2xl hover:text-main capitalize'>{link.title}</NavLink>
          ))
        }

      </ul>
    </aside>
  )
}

export default Sidbar
