import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="!sm:w-full sm:w-xl my-16 sm:my-28 p-6">
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
          <h1 className="text-5xl text-primary font-semibold mb-4">
            Interests and Life Experiences
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Flipping, Tricking, and Trampoline Dunking
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold">Piano</h2>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Learning Langauges
              </h2>
              <p>
                Programming languages aren&apos;t the only languages I like. I
                love learning other languages too.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Two-Year Volunteer Mission
              </h2>
              <p>
                When I was 19 years old, I paused my college career and went to
                the country of Fiji to help others come unto Christ and serve.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
