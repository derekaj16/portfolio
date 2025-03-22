import {
  ArrowRight,
  Award,
  Heart,
  Newspaper,
  PersonStanding,
  School,
} from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="sticky top-10 flex flex-col gap-4">
      <div className="text-sm font-semibold text-muted-foreground">
        About Me
      </div>
      <Link
        href="/experience"
        className="group flex flex-row items-center gap-1 w-fit"
      >
        <Newspaper
          size={16}
          className="mr-1 group-hover:text-gray-500 transition"
        />
        <div>Experience</div>
        <ArrowRight
          size={16}
          className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
        />
      </Link>
      <Link
        href="/education"
        className="group flex flex-row items-center gap-1 w-fit"
      >
        <School
          size={16}
          className="mr-1 group-hover:text-amber-700 transition"
        />
        <div>Education</div>
        <ArrowRight
          size={16}
          className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
        />
      </Link>

      <Link
        href="/awards"
        className="group flex flex-row items-center gap-1 w-fit"
      >
        <Award
          size={16}
          className="mr-1 group-hover:text-blue-500 transition"
        />
        <div>Awards and Certifications</div>
        <ArrowRight
          size={16}
          className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
        />
      </Link>
      <Link
        href="/values"
        className="group flex flex-row items-center gap-1 w-fit"
      >
        <Heart size={16} className="mr-1 group-hover:text-red-500 transition" />
        <div>Values</div>
        <ArrowRight
          size={16}
          className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
        />
      </Link>
      <Link
        href="/interests"
        className="group flex flex-row items-center gap-1 w-fit"
      >
        <PersonStanding
          size={16}
          className="mr-1 group-hover:text-emerald-500 transition"
        />
        <div>Interests and Life Experiences</div>
        <ArrowRight
          size={16}
          className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
        />
      </Link>
    </div>
  )
}

export default Sidebar
