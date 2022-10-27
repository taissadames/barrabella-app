import React from "react";
import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import { useTranslation } from "react-i18next";

export const languageOptions = [
  {value: "en"},
  {value: "es"},
  {value: "pt"}
]

export default function Translate() {
  const{t, i18n} = useTranslation()
  return(
    <div>
      {languageOptions.map(languageOption => (
        
        <a href=""
        key={languageOption.value}
        onClick={() => {
          i18n.changeLanguage(languageOption.value)
        }}
        ></a>
    ))}
    </div>

  )
}

