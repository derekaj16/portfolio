import { ContactCard } from '../components/contact-card'
import {
  Hero,
  LinkedInButton,
  SourceCodeButton,
  ShareResume,
  BeThereCard,
  FamilySearchCard,
  InsertCompanyCard,
  RecipeAppCard,
  PianoCard,
  DunkTeamCard,
  EducationCard,
} from './components'
import { Glasses, PersonStanding, Piano, Plus } from 'lucide-react'
import QuickLinks from './components/quick-links'

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full sm:max-w-4xl mb-20 px-8">
        <div className="flex flex-col gap-8">
          <Hero />
          <div className="mb-8">
            <h2 className="text-4xl font-semibold text-center mb-8">
              Stuff I&apos;ve Made
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <BeThereCard />
              <FamilySearchCard />
              <RecipeAppCard />
              <InsertCompanyCard />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-semibold text-center mb-8">
              Education
            </h2>
            <EducationCard />
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-semibold text-center mb-8 flex flex-col gap-6">
              <div>I Combine Nerd, Athlete, and Musician</div>
              <div className="text-4xl flex flex-row gap-4 items-center justify-center text-muted-foreground">
                <Glasses size={28} />
                <Plus size={20} />
                <PersonStanding size={28} />
                <Plus size={20} />
                <Piano size={28} />
              </div>
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <DunkTeamCard />
              <PianoCard />
            </div>
          </div>

          <QuickLinks />

          <ContactCard />
          <div className="flex flex-wrap gap-4 mx-auto items-center mt-12 justify-center">
            <ShareResume />
            <LinkedInButton />
            <SourceCodeButton />
          </div>
        </div>
      </main>
    </div>
  )
}
