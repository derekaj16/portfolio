import Image from 'next/image'
import sunwest from '../../../../public/img/sunwest.png'
import { LogoCircle } from '@/components/logo-circle'
import python from '../../../../public/img/python.png'
import sf from '../../../../public/img/salesforce.jpg'
import { diffInYearsAndMonths } from '@/lib/utils'

const Sunwest = () => {
  const { years, months } = diffInYearsAndMonths(
    new Date('2025-06-01'),
    new Date(),
  )

  return (
    <div id="bethere" className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center">
            <h2 className="text-xl sm:text-2xl font-medium">Sunwest Bank</h2>
            <div className="italic text-muted-foreground ml-5 pl-5 border-l border-muted-foreground/50 text-base sm:text-lg">
              Software Engineer
            </div>
          </div>
          {/* <div className="flex flex-row gap-3 items-center">
            <LinkIcon size={16} className="text-muted-foreground" />
            <Link
              href="https://www.sunwestbank.com/"
              target="_blank"
              className="text-sky-500 hover:text-sky-400 transition"
            >
              sunwestbank.com
            </Link>
          </div> */}
        </div>
        <div className="p-2 rounded-lg bg-white shadow-2xl">
          <Image
            src={sunwest}
            width={180}
            // height={75}
            alt="Sunwest Bank Logo"
          />
        </div>
      </div>

      <div className="flex flex-row gap-1 my-3">
        <LogoCircle image={sf} name="Salesforce" />
        <LogoCircle image={python} name="Python" />
      </div>

      <div className="italic text-muted-foreground">
        {years > 0 && `${years} year${years > 1 ? 's' : ''}`}{' '}
        {months > 0 && `${months} month${months > 1 ? 's' : ''}`} • June 2025 -
        Present
      </div>

      <div className="flex flex-col gap-6">
        <p>
          Designed and implemented an automation to generate, populate, and
          manage loan documents – reducing manual processing time by 30 minutes
          per customer.
        </p>
        <p>
          Streamlined lead generation by writing scripts and custom plugins that
          unified multiple contact forms into a reusable form, improving data
          consistency.
        </p>
        <p>
          Automated customer engagement tracking by writing a script that pulls
          daily email campaign data and logs activities, giving sales staff
          visibility into recent contacts and improving follow-up timing.
        </p>
        <p>
          Improved Salesforce deployment reliability by refactoring Apex tests
          and raising the automated test pass rate from 40% to 100%.
        </p>
        {/* <p>
          Built an internal AI adoption site to help employees understand
          available AI tools, use cases and onboarding resources – a
          self-service site now used by the entire company. (500 employees)
        </p> */}
      </div>
    </div>
  )
}

export default Sunwest
