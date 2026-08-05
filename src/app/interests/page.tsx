import { BackButton } from '@/components/back-button'
import {
  DunkTeam,
  LanguageLearning,
  Mission,
  PianoPerformance,
} from './components'
import { Metadata } from 'next'

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata: Metadata = {
  title: 'Interests and Life Experiences',
  description:
    'A look into my interests and experiences, including lessons learned from each',
}

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full sm:max-w-4xl mb-20 px-8 mt-16 sm:mt-26">
        <div className="flex flex-col gap-8">
          <BackButton />
          <div className="sm:max-w-xl max-w-full mx-auto mt-8">
            <h1 className="text-5xl text-primary font-semibold mb-4">
              Interests and Life Experience
            </h1>
            <div className="flex flex-col gap-24 my-8">
              <DunkTeam />
              <PianoPerformance />
              <Mission />
              <LanguageLearning />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
