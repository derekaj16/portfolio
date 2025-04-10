import { TreePalm } from 'lucide-react'
import Image from 'next/image'
import missionPic from '../../../../public/img/journey.jpg'

const Mission = () => {
  return (
    <div className="flex flex-col gap-2">
      <TreePalm size={32} />
      <h2 className="text-xl sm:text-2xl font-semibold">
        Two-Year Volunteer Mission
      </h2>
      <div className="text-muted-foreground italic">June 2018 - April 2020</div>
      <Image
        src={missionPic}
        alt="A picture of me walking on a road in Fiji"
        className="w-full rounded-lg my-4"
      />
      <p>
        At 19 years old, I left on a two-year volunteer mission for my church
        (The Church of Jesus Christ of Latter-day Saints) to Fiji, where I
        helped others learn about Christ and served the community. When applying
        for a mission, you don&apos;t know where you&apos;ll be assigned—you
        only know that you are committing to serve. Wherever you go, you learn
        the local language and respect the culture. You are paired with a
        companion 24/7 and switch companions every few months. You work and
        teach together, always looking for ways to improve.
      </p>
      <p>The mission impacted me in several ways:</p>
      <ul className="list-disc ml-6 my-2 flex flex-col gap-2">
        <li>
          I learned to look outside myself. I learned to put the good and
          well-being of others over myself and my desires.
        </li>
        <li>
          I achieved hard things in a short amount of time. I gained a working
          proficiency of Fijian in 6 months, learned Rotuman (a completely
          different language) for another 6 months, and was very fluent in
          Fijian by the end of the two years.
        </li>
        <li>
          I learned to work with all different people. You don&apos;t choose who
          your companion is and sometimes you may not have the same views.
        </li>
        <li>
          I learned to see other perspectives and understand others. When
          teaching the beliefs of my church in a nation that is very religious
          with many different churches, I had to understand others points of
          view and make an effort to find commonalities.
        </li>
        <li>
          I became very experienced in planning and goal-setting. We were
          required to daily plan and weekly plan according to the goals we made.
        </li>
      </ul>
    </div>
  )
}

export default Mission
