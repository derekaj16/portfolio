import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import mtc from '../../../../public/img/mtc.png'
import embark from '../../../../public/img/embark.png'
import angularLogo from '../../../../public/img/angular.png'
import jsLogo from '../../../../public/img/js.png'
import { LogoCircle } from '@/components/logo-circle'

const MTC = () => {
  return (
    <div id="mtc" className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <h2 className="text-xl sm:text-2xl font-medium">MTC</h2>
          <div className="italic text-muted-foreground ml-5 pl-5 border-l border-muted-foreground/50 text-base sm:text-lg">
            Student Developer
          </div>
        </div>
        <Image
          src={mtc}
          width={75}
          height={75}
          className="rounded-lg shadow-2xl"
          alt="FamilySearch Logo"
        />
      </div>

      <div className="flex flex-row gap-1 my-3">
        <LogoCircle image={angularLogo} name="React" />
        <LogoCircle image={jsLogo} name="Javascript" />
      </div>

      <div className="italic text-muted-foreground">
        1 year 4 months • February 2022 - May 2023
      </div>
      <div className="flex flex-col gap-6">
        <p>
          At the Missionary Training Center, I helped to develop a
          language-learning app called Embark. The goal of Embark was to
          expedite the language-learning process for missionaries who are
          quickly sent to other countries to teach and serve in unfamiliar
          languages and cultures. I mainly worked on the frontend to develop
          quiz features on the app. Towards the end of my time at the MTC, I
          spent time helping to refine administration tools used by employees.
        </p>
        <div className="flex flex-row gap-3 items-center">
          <LinkIcon size={16} className="text-muted-foreground" />
          <Link
            href="https://apps.apple.com/us/app/tall-embark-language-learning/id1450739717"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            apps.apple.come/us/app/tall-embark-language-learning/id1450739717
          </Link>
        </div>
      </div>
      <Image
        src={embark}
        alt="Screenshot of the vocabulary page of the embark app"
        className="w-full rounded-lg mt-6"
      />
    </div>
  )
}

export default MTC
