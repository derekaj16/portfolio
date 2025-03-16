import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center ">
      <main className="!sm:min-w-full sm:max-w-xl my-16 sm:my-28 p-6">
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
          <h1 className="text-5xl text-primary font-semibold">Interests</h1>
        </div>
      </main>
    </div>
  )
}
