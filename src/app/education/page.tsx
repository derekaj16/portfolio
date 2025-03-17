import {
  ArrowLeft,
  Box,
  Calendar,
  Circle,
  GraduationCap,
  MapPin,
  School,
} from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="!sm:w-full sm:w-xl my-16 sm:my-28 p-6">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="group flex flex-row items-center gap-1 w-fit"
          >
            <ArrowLeft
              size={16}
              className="group-hover:opacity-100 opacity-0 transition"
            />
            <h2 className="-translate-x-5 group-hover:translate-x-0 transition">
              Back
            </h2>
          </Link>
          <h1 className="text-5xl text-primary font-semibold mb-4">
            Education
          </h1>

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
                  launching a small business. Instead of just learning
                  entrepreneurial skills, participants actively apply them in
                  real-world projects. The program includes classes, workshops,
                  and guest speakers who provide insights into every aspect of
                  starting a business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
