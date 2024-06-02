// import { Languages } from "lucide-react"
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();
  const ChanageLang = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang)
    lang == "en" ?
      (
        document.dir = "ltr"
      )
      :
      (
      document.dir = "rtl"
      )
  }
  return (
    <div className="flex gap-2">
      <button onClick={() => {ChanageLang("en")}} >En</button>
      <div className="w-[1px] h-full bg-main"></div>
      <button onClick={() => {ChanageLang("ar")}}>Ar</button>
    </div>
  )
}


export default Language
