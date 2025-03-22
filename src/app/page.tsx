import { ContactCard } from '../components/contact-card'
import {
  Hero,
  LinkedInButton,
  Sidebar,
  ValueStatements,
  SourceCodeButton,
} from './components'

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full sm:max-w-5xl mb-20 px-8">
        <div className="flex flex-col gap-8">
          <Hero />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
            <div className="col-span-2">
              <ValueStatements />
            </div>
            <div className="col-span-1">
              <Sidebar />
            </div>
          </div>

          <ContactCard />
          <div className="flex flex-row gap-4 mx-auto items-center mt-12">
            <SourceCodeButton />
            <LinkedInButton />
          </div>
        </div>
      </main>
    </div>
  )
}
