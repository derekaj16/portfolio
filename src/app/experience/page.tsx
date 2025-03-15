import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center ">
      <main className="lg:min-w-xl mt-28">
        <div className="flex flex-col gap-8">
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
          <h1 className="text-5xl text-primary font-semibold">Experience</h1>
        </div>
      </main>
    </div>
  )
}
