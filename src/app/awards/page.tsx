import { BackButton } from '@/components/back-button'
import { Awards, Certifications } from './components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awards',
  description:
    'A collection of my awards and certifications, showcasing my achievements in software development and beyond.',
}

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full sm:max-w-4xl mb-20 px-8 mt-16 sm:mt-26">
        <div className="flex flex-col gap-8">
          <BackButton />
          <div className="sm:max-w-xl max-w-full mx-auto mt-8">
            <h1 className="text-5xl text-primary font-semibold mb-4">
              Awards and Certifications
            </h1>
            <div className="flex flex-col gap-12 my-8">
              <Certifications />
              <Awards />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
