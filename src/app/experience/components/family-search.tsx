import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import fs from '../../../../public/img/fs.png'

const FamilySearch = () => {
  return (
    <div id="family-search" className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <h2 className="text-xl sm:text-2xl font-medium">FamilySearch</h2>
          <div className="italic text-muted-foreground ml-5 pl-5 border-l border-muted-foreground/50 text-base sm:text-lg">
            Web Developer Intern
          </div>
        </div>
        <Image
          src={fs}
          width={75}
          height={75}
          className="rounded-lg shadow-2xl"
          alt="FamilySearch Logo"
        />
      </div>

      <div className="italic text-muted-foreground">
        11 months • June 2023 - April 2024
      </div>
      <div className="flex flex-col gap-6">
        <p>
          At FamilySearch, I was part of the Help team, where I developed
          several pages to enhance the accessibility of FamilySearch centers
          worldwide. As a frontend web developer, I worked primarily in{' '}
          <Link
            href="https://react.dev/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            React
          </Link>{' '}
          while also using tools such as{' '}
          <Link
            href="https://jestjs.io/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            Jest
          </Link>
          ,{' '}
          <Link
            href="https://www.travis-ci.com/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            Travis CI
          </Link>
          , and{' '}
          <Link
            href="https://jfrog.com/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            JFrog
          </Link>{' '}
          to ensure reliability and efficiency. I collaborated closely with
          frontend and backend engineers to bring new features to life. I would
          provide a link to the pages I helped to build, but they are meant for
          internal FamilySearch use only.
        </p>
        <p>
          Towards the end of my internship, I had the privilege of helping to
          develop an AI search tool that would help users to more easily get
          help from FamilySearch resources. We leveraged Azure and ChatGPT to
          develop and deploy this feature, giving me hands-on experience in
          integrating AI into real-world applications—experience that has since
          influenced my own projects and products.
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-3 items-center">
            <LinkIcon size={16} className="text-muted-foreground" />
            <Link
              href="https://www.familysearch.org/en/help/helpcenter/help-search"
              target="_blank"
              className="text-sky-500 hover:text-sky-400 transition"
            >
              familysearch.org/en/help/helpcenter/help-search
            </Link>
          </div>
          <div className="text-muted-foreground text-sm italic ml-8">
            FamilySearch account required to try
          </div>
        </div>
      </div>
    </div>
  )
}

export default FamilySearch
