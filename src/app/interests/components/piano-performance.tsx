import { ExternalLink, Film, LinkIcon, Piano } from 'lucide-react'
import Link from 'next/link'

const PianoPerformance = () => {
  return (
    <div className="flex flex-col gap-2">
      <Piano size={32} />
      <h2 className="text-xl sm:text-2xl font-semibold">Piano Performance</h2>
      <div className="text-muted-foreground italic">2011 - 2018</div>
      <p>
        I studied classical piano for seven years, from age eleven through
        graduation of high school. Each year, I prepared a volume of pieces,
        usually amounting to one hour of music. Throughout the year I performed
        select pieces at quarterly recitals, culminating in a final performance
        known as Exams at the end of the year, where I played the entire set in
        front of adjudicators who determined if I could move to the next level.
        The frequent performances required me to practice daily for anywhere
        from one to several hours.
      </p>
      <div className="flex flex-row gap-3 items-center my-3">
        <LinkIcon size={16} className="text-muted-foreground" />
        <Link
          href="https://www.ethos.school/"
          target="_blank"
          className="text-sky-500 hover:text-sky-400 transition"
        >
          ethos.school
        </Link>
      </div>
      <p>This rigorous discipline taught me several things:</p>
      <ul className="list-disc ml-6 my-2 flex flex-col gap-2">
        <li>Performance under pressure</li>
        <li>Rhythm, musicality, and finger mechanics</li>
        <li>Not letting mistakes get in the way of progress</li>
        <li>The cumulative power of consistent, focused effort</li>

        <li>
          Developing talent opens opportunities for service in many settings.
          For example, I spent one year playing the piano in the lobby of a
          Memorial Hermann hospital, offering comfort to those inside.
        </li>
      </ul>
      <p>
        If you are interested in hearing some of what I play, here is a
        40-minute recital of mine for you to play in the background while you
        work:
      </p>
      <div className="flex flex-row gap-3 items-center mt-3 group">
        <Film size={16} className="text-muted-foreground" />
        <Link
          href="https://www.youtube.com/watch?v=MWheEsG7GVc"
          target="_blank"
          className="text-sky-500 hover:text-sky-400 transition"
        >
          Final Exam Recital
        </Link>
        <ExternalLink
          size={16}
          className="group-hover:opacity-100 opacity-0 transition"
        />
      </div>
    </div>
  )
}

export default PianoPerformance
