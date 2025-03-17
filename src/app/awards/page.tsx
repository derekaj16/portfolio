import { ArrowLeft, LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="!sm:w-full sm:w-xl my-16 sm:my-28 p-6">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="group flex flex-row items-center gap-1 w-fit"
          >
            <ArrowLeft
              size={20}
              className="group-hover:opacity-100 opacity-0 transition"
            />
            <h2 className="-translate-x-5 group-hover:translate-x-0 transition">
              Back
            </h2>
          </Link>
          <h1 className="text-5xl text-primary font-semibold mb-4">
            Awards & Certifications
          </h1>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Certifications
              </h2>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium">AWS Cloud Practitioner</h3>
                <div className="italic text-muted-foreground">
                  January 1, 2024
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Awards</h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">INTEX - 2nd place</h3>
                  <div className="italic text-muted-foreground">
                    December 2022
                  </div>
                  <p>
                    Our team was given one week to design a product that would
                    help users track their micronutrient intake and monitor
                    their health. This intense project served as a skills
                    assessment for the enitre junior class of Information
                    Systems students, blending knowledge gained from our classes
                    that semester.
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
                  <div className="italic text-muted-foreground">
                    January 2017
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">Eagle Scout Award</h3>
                  <div className="italic text-muted-foreground">June 2013</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
