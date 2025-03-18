import {
  ArrowRight,
  Award,
  Heart,
  LinkIcon,
  Newspaper,
  PersonStanding,
  // PersonStanding,
  School,
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="!sm:w-full sm:w-xl my-16 sm:my-28 p-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-lg text-muted-foreground uppercase leading-2 font-medium">
              Portfolio
            </div>
            <h1 className="text-5xl text-primary font-semibold">
              Derek Johnson
            </h1>
            <div className="text-muted-foreground">
              My portfolio is simple so I can focus on things that matter.
            </div>
          </div>

          <Link
            href="/education"
            className="group flex flex-row items-center gap-1 w-fit"
          >
            <School size={16} className="mr-1" />
            <h2>Education</h2>
            <ArrowRight
              size={16}
              className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/experience"
            className="group flex flex-row items-center gap-1 w-fit"
          >
            <Newspaper size={16} className="mr-1" />
            <h2>Experience</h2>
            <ArrowRight
              size={16}
              className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/awards"
            className="group flex flex-row items-center gap-1 w-fit"
          >
            <Award size={16} className="mr-1" />
            <h2>Awards and Certifications</h2>
            <ArrowRight
              size={16}
              className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/values"
            className="group flex flex-row items-center gap-1 w-fit"
          >
            <Heart size={16} className="mr-1" />
            <h2>Values</h2>
            <ArrowRight
              size={16}
              className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/interests"
            className="group flex flex-row items-center gap-1 w-fit"
          >
            <PersonStanding size={16} className="mr-1" />
            <h2>Interests and Life Experiences</h2>
            <ArrowRight
              size={16}
              className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
            />
          </Link>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-semibold mt-2">Other links</h4>
            <div className="flex flex-row gap-3 items-center">
              <LinkIcon size={16} className="text-muted-foreground" />
              <Link
                href="https://www.linkedin.com/in/derekaj/"
                target="_blank"
                className="text-sky-500 hover:text-sky-400 transition"
              >
                linkedin.com/in/derekaj/
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
