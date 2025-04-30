import { LinkIcon } from 'lucide-react'
import Link from 'next/link'

const Awards = () => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Awards</h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">INTEX - 2nd place</h3>
          <div className="italic text-muted-foreground">December 2022</div>
          <p>
            Our team was given one week to design a product that would help
            users track their micronutrient intake and monitor their health.
            This intense project served as a skills assessment for the enitre
            junior class of Information Systems students, blending knowledge
            gained from our classes that semester.
          </p>
          <div className="flex flex-row gap-3 items-center">
            <LinkIcon size={20} className="text-muted-foreground" />
            <Link
              href="https://github.com/derekaj16/INTEX/tree/master"
              target="_blank"
              className="text-sky-500 hover:text-sky-400 transition"
            >
              github.com/derekaj16/INTEX
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">
            Blinn College Piano Competition - 1st place
          </h3>
          <div className="italic text-muted-foreground">January 2017</div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Eagle Scout Award</h3>
          <div className="italic text-muted-foreground">June 2013</div>
        </div>
      </div>
    </div>
  )
}

export default Awards
