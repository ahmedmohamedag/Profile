/* eslint-disable react-refresh/only-export-components */

import { TFunction } from 'i18next';
import Marquee from 'react-fast-marquee';
import { withTranslation } from 'react-i18next';

const skillsData = [
  {
    title: 'HTML',
    logo: "/skills/html.svg"
  },
  {
    title: 'CSS',
    logo: "/skills/css.svg"
  },
  {
    title: 'Javascript',
    logo: "/skills/javascript.svg"
  },
  {
    title: 'Bootstrap',
    logo: "/skills/bootstrap.svg"
  },
  {
    title: 'Typescript',
    logo: "/skills/typescript.svg"
  },
  {
    title: 'React',
    logo: "/skills/react.svg"
  },
  {
    title: 'Next JS',
    logo: "/skills/nextJS.svg"
  },
  {
    title: 'Tailwind',
    logo: "/skills/tailwind.svg"
  },
  {
    title: 'jquery',
    logo: "/skills/jquery.svg"
  },
  {
    title: 'git',
    logo: "/skills/git.svg"
  },
  {
    title: 'githubt',
    logo: "/skills/github.svg"
  },
  {
    title: 'search',
    logo: "/skills/search.svg"
  },
]





const About = ({ t }: { t: TFunction<"translation", undefined> }) => {

  return (
    <section className=''>
      {/* about me */}
      <div className="">
        <h2 className='pb-4 text-2xl font-semibold capitalize'>{t("biome")}</h2>
         <p className='w-full mx-auto text-xl leading-7 md:w-[60%]'>{t("bio")}</p> 
      </div>
      {/* skills */}
      <div className="">
        <h2 className='py-4 text-2xl font-semibold capitalize'>{t("skills")}</h2>


        <div dir='ltr' className="container py-8 mx-auto w-[300px] md:w-full">
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}>
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4 ">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <img
                        src={skill.logo}
                        alt={skill.title}
                        width={40}
                        className="w-auto h-full rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-white sm:text-lg">
                      {skill.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

        </div>


      </div>

      {/* contact */}
    </section>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default withTranslation()(About)
