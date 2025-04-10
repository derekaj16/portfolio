import { BackButton } from '@/components/back-button'
import { HighSchool, University } from './components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education',
  description: 'A brief overview of my educational journey',
}

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full sm:max-w-4xl mb-20 px-8 mt-16 sm:mt-26">
        <div className="flex flex-col gap-8">
          <BackButton />
          <div className="sm:max-w-xl max-w-full mx-auto mt-8">
            <h1 className="text-5xl text-primary font-semibold mb-4">
              Education
            </h1>
            <div className="flex flex-col gap-4 my-8">
              <HighSchool />
              <University />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
