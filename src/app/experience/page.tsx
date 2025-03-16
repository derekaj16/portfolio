import { ArrowLeft, LinkIcon } from 'lucide-react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import bt from '../../../public/img/bt-3.jpg'
import fs from '../../../public/img/fs.png'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center ">
      <main className="!sm:min-w-full sm:max-w-xl my-16 sm:my-28 p-6">
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
          <h1 className="text-5xl text-primary font-semibold mb-4">
            Experience
          </h1>

          <BeThere />
          <FamilySearch />
        </div>
      </main>
    </div>
  )
}

const BeThere = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <h2 className="text-2xl font-medium">BeThere</h2>
          <div className="italic text-muted-foreground ml-5 pl-5 border-l border-muted-foreground/50 text-lg">
            CEO
          </div>
        </div>
        <Image
          src={bt}
          width={75}
          height={75}
          className="rounded-lg shadow-2xl"
          alt="BeThere Logo"
        />
      </div>

      <div className="italic text-muted-foreground">10 months • Present</div>
      <div className="flex flex-col gap-6">
        <p>
          BeThere is an event scheduling and staffing software. It is a tool
          that significantly boosts team efficiency, productivity, and
          collaboration.
        </p>
        <p>
          The website is built using{' '}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            Next.js
          </Link>{' '}
          with{' '}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            Tailwind
          </Link>
          . The mobile app is built using{' '}
          <Link
            href="https://flutter.dev/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            Flutter
          </Link>
          . The backend services are all handled through{' '}
          <Link
            href="https://supabase.com/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            Supabase
          </Link>
          .
        </p>
        <div className="flex flex-row gap-3 items-center">
          <LinkIcon size={20} className="text-muted-foreground" />
          <Link
            href="https://btscheduling.com/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            btscheduling.com
          </Link>
        </div>
        <p>
          BeThere is the product of months of planning, UI/UX design,
          development, and testing. It is by no means finished, but always
          improving.
        </p>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer">
              <h3 className="text-lg font-semibold mb-2 no-underline">
                How it works
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-base">
                <ol className="list-decimal ml-6 flex flex-col gap-2 mb-4">
                  <li>
                    A team adds their events to the calendar. The events are
                    fully customizable.
                  </li>
                  <li>
                    The events are easily visible and colored based on whether
                    or not team members have signed up to attend.
                  </li>
                  <li>
                    The team quickly plans ahead and signs up for whatever
                    events they are able.
                  </li>
                  <li>
                    The team manager can keep the team accountable and see
                    exactly how each member has contributed.
                  </li>
                  <li>
                    BeThere includes notifications, AI, analytics and other
                    features to boost team productivity!
                  </li>
                </ol>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">
                Benefits of BeThere
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-base">
                <p>
                  The software has been built from the ground up with input from
                  real teams to suit their needs. The advantages of using the
                  app for my team (the BYU Dunk Team) have been:
                </p>
                <ol className="list-disc ml-6 mt-2 flex flex-col gap-2">
                  <li>No missed events.</li>
                  <li>Fewer instances of the team arriving late to events.</li>
                  <li>Higher sign-up rates.</li>
                  <li>Less stress.</li>
                  <li>Greater accountability.</li>
                  <li>
                    Easier collaboration. Periodically, the team can review the
                    calendar together to identify where help might be needed.{' '}
                  </li>
                  <li>
                    More time focusing on our skills as a team rather than
                    coordinating who can attend what event.
                  </li>
                </ol>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

const FamilySearch = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <h2 className="text-2xl font-medium">FamilySearch</h2>
          <div className="italic text-muted-foreground ml-5 pl-5 border-l border-muted-foreground/50 text-lg">
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
            Jest
          </Link>{' '}
          to ensure reliability and efficiency. I collaborated closely with
          frontend and backend engineers to bring new features to life.
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
            <LinkIcon size={20} className="text-muted-foreground" />
            <Link
              href="https://www.familysearch.org/en/help/helpcenter/help-search"
              target="_blank"
              className="text-sky-500 hover:text-sky-400 transition"
            >
              familysearch.org/en/help/helpcenter/help-search
            </Link>
          </div>
          <div className="text-muted-foreground text-sm italic">
            FamilySearch account required to try
          </div>
        </div>
      </div>
    </div>
  )
}
