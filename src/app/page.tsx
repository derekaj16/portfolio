import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center ">
      <main className="lg:min-w-xl mt-16 md:mt-28 p-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-lg text-muted-foreground uppercase leading-2 font-medium">
              Portfolio
            </div>
            <h1 className="text-5xl text-primary font-semibold">
              Derek Johnson
            </h1>
            <div className="text-muted-foreground">
              My portfolio is simple so I can focus on things that actually
              matter.
            </div>
          </div>

          <Link
            href="/education"
            className="group flex flex-row items-center gap-1 w-fit"
          >
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
            <h2>Experience</h2>
            <ArrowRight
              size={16}
              className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/values"
            className="group flex flex-row items-center gap-1 w-fit"
          >
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
            <h2>Hobbies/Interests</h2>
            <ArrowRight
              size={16}
              className="group-hover:opacity-100 opacity-0 transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </main>
    </div>
  )
}
