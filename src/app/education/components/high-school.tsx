import { Calendar, Circle, GraduationCap, MapPin } from 'lucide-react'

const HighSchool = () => {
  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-1 flex flex-col items-center">
        <Circle size={30} className="mb-4" />
        <div className="h-[110px] w-0.5 bg-accent-foreground"></div>
      </div>

      <div className="col-span-9 flex flex-col gap-3">
        <div className="text-xl font-medium mb-3 ">
          The Woodlands High School
        </div>

        <div className=" flex flex-row gap-4 items-center">
          <GraduationCap size={16} />
          High School Diploma
        </div>
        <div className=" flex flex-row gap-4 items-center">
          <Calendar size={16} />
          April 2017
        </div>
        <div className=" flex flex-row gap-4 items-center">
          <MapPin size={16} />
          The Woodlands, TX
        </div>
      </div>
    </div>
  )
}

export default HighSchool
