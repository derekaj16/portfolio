import {
  ArrowLeft,
  Calendar,
  Circle,
  GraduationCap,
  MapPin,
  School,
} from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center ">
      <main className="!sm:min-w-full sm:max-w-xl my-16 sm:my-28 p-6">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="group flex flex-row items-center gap-1 w-fit"
          >
            <ArrowLeft
              size={20}
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
              <div className="h-[110px] w-1 bg-accent-foreground"></div>
            </div>

            <div className="col-span-9 flex flex-col gap-3">
              <div className="text-xl font-medium mb-3 ">
                The Woodlands High School
              </div>

              <div className="text-muted-foreground flex flex-row gap-4 items-center">
                <GraduationCap size={20} />
                High School Diploma
              </div>
              <div className="text-muted-foreground flex flex-row gap-4 items-center">
                <Calendar size={20} />
                April 2017
              </div>
              <div className="text-muted-foreground flex flex-row gap-4 items-center">
                <MapPin size={20} />
                The Woodlands, TX
              </div>
            </div>
          </div>

          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-1 flex flex-col items-center">
              <Circle size={30} className="mb-4" />
              <div className="h-[170px] w-1 bg-accent-foreground"></div>
            </div>

            <div className="col-span-9 flex flex-col gap-3">
              <div className="text-xl font-medium mb-3 ">
                Brigham Young University
              </div>

              <div className="text-muted-foreground flex flex-row gap-4 items-center">
                <GraduationCap size={20} />
                <div>
                  Master of Information Systems &<br />
                  Bachelor of Science
                </div>
              </div>
              <div className="text-muted-foreground flex flex-row gap-4 items-center">
                <School size={20} />
                Marriott School of Business
              </div>
              <div className="text-muted-foreground flex flex-row gap-4 items-center">
                <Calendar size={20} />
                April 2025
              </div>
              <div className="text-muted-foreground flex flex-row gap-4 items-center">
                <MapPin size={20} />
                Provo, UT
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
