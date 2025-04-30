import { CheckSquare, LinkIcon, Users } from 'lucide-react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import bt from '../../../../public/img/bt-3.jpg'
import { Card, CardContent } from '@/components/ui/card'
import { LogoCircle } from '@/components/logo-circle'
import reactLogo from '../../../../public/img/react.png'
import tsLogo from '../../../../public/img/ts.png'
import supabaseLogo from '../../../../public/img/supabase.png'
import flutterLogo from '../../../../public/img/flutter.png'

const BeThere = () => {
  return (
    <div id="bethere" className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center">
            <h2 className="text-xl sm:text-2xl font-medium">BeThere</h2>
            <div className="italic text-muted-foreground ml-5 pl-5 border-l border-muted-foreground/50 text-base sm:text-lg">
              Founder
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <LinkIcon size={16} className="text-muted-foreground" />
            <Link
              href="https://btscheduling.com/"
              target="_blank"
              className="text-sky-500 hover:text-sky-400 transition"
            >
              btscheduling.com
            </Link>
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

      <div className="flex flex-row gap-1 my-3">
        <LogoCircle image={reactLogo} name="React" />
        <LogoCircle image={tsLogo} name="Typescript" />
        <LogoCircle image={supabaseLogo} name="Supabase" />
        <LogoCircle image={flutterLogo} name="Flutter" />
      </div>

      <div className="italic text-muted-foreground">
        11 months • May 2024 - Present
      </div>

      <div className="flex flex-col gap-6">
        <p>
          BeThere is an event scheduling and staffing software. It is a tool
          that significantly boosts team efficiency, productivity, and
          collaboration.
        </p>

        <p>
          While on the BYU Dunk Team, a team that attends hundreds of events, I
          noticed we kept switching scheduling softwares because they were
          inadequate for our team&apos;s needs. I took initiative to build an
          app that enabled our team to effectively collaborate and manage our
          events.
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

        {/* <p>
          BeThere is the product of months of planning, UI/UX design,
          development, and testing. It is by no means finished, but always
          improving.
        </p> */}

        <Card className="p-0 bg-background dark:bg-input/30 shadow-none">
          <CardContent className="p-4">
            {/* <CardHeader className="p-0">
              <CardTitle className="text-sm font-normal italic flex flex-row items-center gap-1">
                <ChartNoAxesCombined
                  size={16}
                  className="text-muted-foreground"
                />
                Cool Stats
              </CardTitle>
            </CardHeader> */}
            <div className="flex flex-row justify-around">
              <div className="flex flex-col gap-2 items-center">
                <div className="flex flex-row gap-1 font-medium items-center">
                  <Users size={16} />
                  Active Users
                </div>
                <div className="text-4xl font-semibold">54</div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="flex flex-row gap-1 font-medium items-center">
                  <CheckSquare size={16} />
                  Events Managed
                </div>
                <div className="text-4xl font-semibold">500+</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer">
              <h3 className="text-base font-medium mb-2 no-underline">
                How It Works
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
              <h3 className="text-base font-medium mb-2">
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
                <ul className="list-disc ml-6 mt-2 flex flex-col gap-2">
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
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default BeThere
