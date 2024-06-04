/* eslint-disable react-refresh/only-export-components */

import { TFunction } from 'i18next';
import { X } from 'lucide-react';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';


const Resume = ({ t }: { t: TFunction<"translation", undefined> }) => {
  const [view, setView] = useState(false)
  const resumeViewHandler = (isView: boolean) => {
    setView(isView)
  }
  return (
    <Fragment>

      <button onClick={() => {
        resumeViewHandler(true)
      }}
        className="hidden px-5 py-1 capitalize border outline-none cursor-pointer lg:block border-dark rounded-3xl dark:border-light hover:text-main"
        >
        {t("resume")}
      </button>
      <div id='resumeView' className={` ${!view ? "hidden" : "fixed"}   inset-0`}>


        <button onClick={() => {
        resumeViewHandler(false)
      }} className='block mt-5 ms-auto me-5'>
          <X color='red' size={40} className='' />
        </button>
          <iframe src="cv.pdf" className='w-[70%] h-screen mx-auto fixed top-0 left-1/2 -translate-x-1/2  rounded-3xl'></iframe>

      </div>
    </Fragment>
  )
}

export default withTranslation()(Resume)



