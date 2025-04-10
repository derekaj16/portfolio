import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Award,
  Heart,
  Newspaper,
  PersonStanding,
  School,
} from 'lucide-react'
import Link from 'next/link'

const QuickLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-semibold text-muted-foreground">
        More About Me
      </div>
      <div className="flex flex-col md:flex-wrap gap-4 w-full">
        <Link href="/experience" className="group w-fit">
          <Button
            variant="ghost"
            className="flex flex-row items-center gap-1 w-fit cursor-pointer"
          >
            <Newspaper
              size={16}
              className="mr-1 group-hover:text-cyan-500 transition"
            />
            <div>Experience</div>
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Button>
        </Link>
        <Link href="/education" className="group w-fit">
          <Button
            variant="ghost"
            className="flex flex-row items-center gap-1 w-fit cursor-pointer"
          >
            <School
              size={16}
              className="mr-1 group-hover:text-cyan-500 transition"
            />
            <div>Education</div>
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Button>
        </Link>

        <Link href="/awards" className="group w-fit">
          <Button
            variant="ghost"
            className="flex flex-row items-center gap-1 w-fit cursor-pointer"
          >
            <Award
              size={16}
              className="mr-1 group-hover:text-cyan-500 transition"
            />
            <div>Awards and Certifications</div>
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Button>
        </Link>
        <Link href="/interests" className="group w-fit">
          <Button
            variant="ghost"
            className="flex flex-row items-center gap-1 w-fit cursor-pointer"
          >
            <PersonStanding
              size={16}
              className="mr-1 group-hover:text-cyan-500 transition"
            />
            <div>Interests and Life Experiences</div>
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Button>
        </Link>
        <Link href="/values" className="group w-fit">
          <Button
            variant="ghost"
            className="flex flex-row items-center gap-1 w-fit cursor-pointer"
          >
            <Heart
              size={16}
              className="mr-1 group-hover:text-cyan-500 transition"
            />
            <div>Values</div>
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default QuickLinks
