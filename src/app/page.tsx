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
  WorkExperienceCard,
  SantaCard,
  KidneyAid,
} from './components'
import {
  BriefcaseBusiness,
  Glasses,
  GraduationCap,
  Palette,
  PersonStanding,
  Piano,
  Plus,
} from 'lucide-react'
import QuickLinks from './components/quick-links'
import TextAnalyzerCard from './components/text-analyzer-card'

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full sm:max-w-4xl mb-20 px-8">
        <div className="flex flex-col gap-8">
          <Hero />
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-center mb-12 flex flex-col gap-6">
              <div className="text-4xl flex flex-row gap-4 items-center justify-center text-cyan-500">
                <Palette size={28} />
              </div>
              Stuff I&apos;ve Made
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <BeThereCard />
              <TextAnalyzerCard />
              <FamilySearchCard />
              <RecipeAppCard />
              <KidneyAid />
              <SantaCard />
              <InsertCompanyCard />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-center mb-12 flex flex-col gap-6">
              <div className="text-4xl flex flex-row gap-4 items-center justify-center text-cyan-500">
                <BriefcaseBusiness size={28} />
              </div>
              Work Experience
            </h2>
            <div className="flex flex-col gap-6">
              <WorkExperienceCard />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-center mb-12 flex flex-col gap-6">
              <div className="text-4xl flex flex-row gap-4 items-center justify-center text-cyan-500">
                <GraduationCap size={28} />
              </div>
              Education
            </h2>
            <div className="flex flex-col gap-6">
              <EducationCard />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-center mb-12 flex flex-col gap-6">
              <div className="text-4xl flex flex-row gap-4 items-center justify-center text-cyan-500">
                <Glasses size={28} />
                <Plus size={20} />
                <PersonStanding size={28} />
                <Plus size={20} />
                <Piano size={28} />
              </div>
              <div>I Combine Nerd, Athlete, and Musician</div>
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
