import {
  Box,
  Calendar,
  Circle,
  GraduationCap,
  MapPin,
  School,
} from 'lucide-react'
import Link from 'next/link'

const University = () => {
  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-1 flex flex-col items-center">
        <Circle size={30} className="mb-4" />
        <div className="h-[470px] sm:h-[350px] w-0.5 bg-accent-foreground"></div>
      </div>

      <div className="col-span-9 flex flex-col gap-3">
        <div className="text-xl font-medium mb-3 ">
          Brigham Young University
        </div>

        <div className=" flex flex-row gap-4 items-center">
          <GraduationCap size={16} />
          <div>
            Master of Information Systems &<br />
            Bachelor of Science
          </div>
        </div>
        <div className=" flex flex-row gap-4 items-center">
          <School size={16} />
          Marriott School of Business
        </div>
        <div className=" flex flex-row gap-4 items-center">
          <Calendar size={16} />
          April 2025
        </div>
        <div className=" flex flex-row gap-4 items-center">
          <MapPin size={16} />
          Provo, UT
        </div>
        <div className="flex flex-row gap-4 items-start">
          <Box size={16} className="mt-1" />
          <p className="sm:max-w-[400px] max-w-[250px]">
            During my fourth year at BYU, I joined{' '}
            <Link
              href="https://sandbox.ing/"
              target="_blank"
              className="text-sky-500 hover:text-sky-400 transition"
            >
              Sandbox
            </Link>
            , a software startup program that offers university credit for
            launching a small business. Instead of just learning entrepreneurial
            skills, participants actively apply them in real-world projects. The
            program includes classes, workshops, and guest speakers who provide
            insights into every aspect of starting a business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default University
