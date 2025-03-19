import { ArrowLeft, ExternalLink, Film, LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="!sm:w-full sm:w-xl my-16 sm:my-28 p-6">
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
            Interests and Life Experiences
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold">
                The BYU Dunk Team
              </h2>
              <div className="text-muted-foreground italic">
                June 2021 - Present
              </div>
              <p>
                I was a member of an acrobatic team at BYU that specialized in
                trampoline dunking, stunting, and flipping. We performed at
                hundreds of shows for diverse audiences, including stadiums of
                fans, small church groups, individuals with special needs,
                elementary schools, and large companies.
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
                Once or twice a week during the school year, our team put on an
                assembly at a local elementary school and taught the kids about
                how to be strong physically, mentally, and socially as well as
                being safe with technology. These volunteer-based assemblies
                were chances for us to give back to the community we live in. At
                the end, we would perform a dunk show for them.
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
            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Piano Performance
              </h2>
              <div className="text-muted-foreground italic">2011 - 2018</div>
              <p>
                I studied classical piano for seven years, from age eleven
                through graduation of high school. Each year, I prepared a
                volume of pieces, usually amounting to one hour of music.
                Throughout the year I performed select pieces at quarterly
                recitals, culminating in a final performance known as Exams at
                the end of the year, where I played the entire set in front of
                adjudicators who determined if I could move to the next level.
                The frequent performances required me to practice daily for
                anywhere from one to several hours.
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
                  Developing talent opens opportunities for service in many
                  settings. For example, I spent one year playing the piano in
                  the lobby of a Memorial Hermann hospital, offering comfort to
                  those inside.
                </li>
              </ul>
              <p>
                If you are interested in hearing some of what I play, here is a
                40-minute recital of mine for you to play in the background
                while you work:
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

            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Two-Year Volunteer Mission
              </h2>
              <div className="text-muted-foreground italic">
                June 2018 - April 2020
              </div>
              <p>
                At 19 years old, I left on a two-year volunteer mission for my
                church (The Church of Jesus Christ of Latter-day Saints) to
                Fiji, where I helped others learn about Christ and served the
                community. When applying for a mission, you don&apos;t know
                where you&apos;ll be assigned—you only know that you are
                committing to serve. Wherever you go, you learn the local
                language and respect the culture. You are paired with a
                companion 24/7 and switch companions every few months. You work
                and teach together, always looking for ways to improve.
              </p>
              <p>The mission impacted me in several ways:</p>
              <ul className="list-disc ml-6 my-2 flex flex-col gap-2">
                <li>
                  I learned to look outside myself. I learned to put the good
                  and well-being of others over myself and my desires.
                </li>
                <li>
                  I achieved hard things in a short amount of time. I gained a
                  working proficiency of Fijian in 6 months, learned Rotuman (a
                  completely different language) for another 6 months, and was
                  very fluent in Fijian by the end of the two years.
                </li>
                <li>
                  I learned to work with all different people. You don&apos;t
                  choose who your companion is and sometimes you may not have
                  the same views.
                </li>
                <li>
                  I learned to see other perspectives and understand others.
                  When teaching the beliefs of my church in a nation that is
                  very religious with many different churches, I had to
                  understand others points of view and make an effort to find
                  commonalities.
                </li>
                <li>
                  I became very experienced in planning and goal-setting. We
                  were required to daily plan and weekly plan according to the
                  goals we made.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Learning Langauges
              </h2>
              <p>
                Programming languages aren&apos;t the only languages I like. I
                love learning other languages too. So far, I am fluent in:
              </p>
              <ul className="list-disc ml-6 my-2 flex flex-col gap-2">
                <li>Fijian</li>
              </ul>
              <p>And I am working on these languages:</p>
              <ul className="list-disc ml-6 my-2 flex flex-col gap-2">
                <li>Spanish</li>
                <li>French</li>
                <li>German</li>
              </ul>
              <p>
                If I had more time, I would also love to learn Arabic, Chinese
                or a language that doesn&apos;t use the English alphabet. I love
                learning languages because they allow you to understand people
                in a deeper and more meaningful way.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
