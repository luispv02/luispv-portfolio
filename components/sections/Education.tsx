import { MdOutlineSchool } from "react-icons/md"
import { SectionHeader } from "./SectionHeader"

export const Education = () => {
  return (
    <div id="education">
      <SectionHeader title="Educación"/>

      <div>
        <div className="bg-white/10 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <MdOutlineSchool size={30} className="text-blue-500"/>
            <div className="space-y-1">
              <p className="text-xs md:text-sm font-bold">Licenciatura en Ingeniería en Sistemas Computacionales</p>
              <p className="text-xs md:text-sm text-gray-400">Centro de Estudios Superiores del Norte de Veracruz</p>
              <p className="text-xs md:text-sm font-semibold">2017 – 2020 | <span className="font-bold">Titulado</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}