import { ExternalLink, Film, PersonStanding } from 'lucide-react'
import Link from 'next/link'

const DunkTeam = () => {
  return (
    <div id="dunkteam" className="flex flex-col gap-2">
      <PersonStanding size={32} className="text-cyan-500" />
      <h2 className="text-xl sm:text-2xl font-semibold">The BYU Dunk Team</h2>
      <div className="text-muted-foreground italic">June 2021 - June 2025</div>
      <p>
        I was a member of an acrobatic team at BYU that specialized in
        trampoline dunking, stunting, and flipping. We performed at hundreds of
        shows for diverse audiences, including stadiums of fans, small church
        groups, individuals with special needs, elementary schools, and large
        companies.
      </p>
      <p>While on the team, I developed these skills:</p>
      <ul className="list-disc ml-6 my-2 flex flex-col gap-2">
        <li>Performance under pressure</li>
        <li>Synchronization and teamwork</li>
        <li>Engaging and entertaining audiences</li>
        <li>Acrobatics and tricking</li>
        <li>Adaptable athleticism</li>
      </ul>
      <p>
        Once or twice a week during the school year, our team put on an assembly
        at a local elementary school and taught the kids about how to be strong
        physically, mentally, and socially as well as being safe with
        technology. These volunteer-based assemblies were chances for us to give
        back to the community we live in. At the end, we would perform a dunk
        show for them.
      </p>
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex flex-row gap-3 items-center group">
          <Film size={16} className="text-muted-foreground" />
          <Link
            href="https://youtu.be/v14Wht6jGXA"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            Elementary School Assembly
          </Link>
          <ExternalLink
            size={16}
            className="group-hover:opacity-100 opacity-0 transition"
          />
        </div>
        <div className="flex flex-row gap-3 items-center group">
          <Film size={16} className="text-muted-foreground" />
          <Link
            href="https://youtu.be/cXPUu-a76BA"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            BYU Performance
          </Link>
          <ExternalLink
            size={16}
            className="group-hover:opacity-100 opacity-0 transition"
          />
        </div>
        <div className="flex flex-row gap-3 items-center group">
          <Film size={16} className="text-muted-foreground" />
          <Link
            href="https://youtube.com/shorts/5utMvCYBDag"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            My Coolest Dunk
          </Link>
          <ExternalLink
            size={16}
            className="group-hover:opacity-100 opacity-0 transition"
          />
        </div>
        <div className="flex flex-row gap-3 items-center group">
          <Film size={16} className="text-muted-foreground" />
          <Link
            href="https://youtube.com/shorts/hQvXkJAm1Qg"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            My Most Difficult Dunk
          </Link>
          <ExternalLink
            size={16}
            className="group-hover:opacity-100 opacity-0 transition"
          />
        </div>
      </div>
    </div>
  )
}

export default DunkTeam
