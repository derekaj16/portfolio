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
          <h1 className="text-5xl text-primary font-semibold mb-4">Values</h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Charity</h3>
              <p>
                Charity is the supreme attribute. I will love God and love
                others. No matter the situation, I can show charity towards
                others. I will not let a problem to be solved become more
                important than a person to be loved.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Fairness</h3>
              <p>
                I will be fair in my actions and words. I will not form opinions
                of a matter before hearing all sides. I will do my best to be
                fair in my analysis of situations.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                Integrity, Honesty, and Dependability
              </h3>
              <p>
                I will follow through on commitments that I make to God and to
                others. If I foresee a problem, I will make that known before
                making the commitment. I will be honest in my dealings with
                others.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Patience</h3>
              <p>
                I will not allow any matter, no matter how serious, to cause me
                to lose my patience. I will maintain composure and take life as
                it comes.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Generosity</h3>
              <p>
                Through my own means—love, service, time, finances, etc.—I will
                be generous in giving what I have to those in need.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
