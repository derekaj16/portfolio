import { BackButton } from '@/components/back-button'
import { BeThere, FamilySearch, MTC } from './components'
import { Metadata } from 'next'
import TextAnalyzer from './components/text-analyzer'
// import Sunwest from './components/sunwest'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Explore my work experience, including the business I founded',
}

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full sm:max-w-4xl mb-20 px-8 mt-16 sm:mt-26">
        <div className="flex flex-col gap-8">
          <BackButton />
          <div className="sm:max-w-xl max-w-full mx-auto mt-8">
            <h1 className="text-5xl text-primary font-semibold mb-4">
              Experience
            </h1>
            <div className="flex flex-col gap-24 my-8">
              <BeThere />
             
              <TextAnalyzer />
              <FamilySearch />
              <MTC />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
