import {
  ArrowRight,
  ChartNoAxesCombined,
  CheckCircle,
  Gauge,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'

const ValueStatements = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <ChartNoAxesCombined size={32} />
        <h2 className="text-3xl font-semibold max-w-xl">
          I build solutions that boost real-world efficiency.
        </h2>
        <p className="text-muted-foreground">
          I took initiative to build an event scheduling app for my team at BYU
          to replace the inadequate tools we used. Since it&apos;s been in use,
          efficiency and team engagement have skyrocketed.
        </p>
        <Link
          href="/experience#bethere"
          className="group/link flex flex-row items-center gap-1 w-fit font-bold text-sm"
        >
          <Lightbulb
            size={16}
            className="mr-1  group-hover/link:text-yellow-500 transition"
          />
          <div>See how I did it</div>
          <ArrowRight
            size={16}
            className="group-hover/link:opacity-100 opacity-0 transition group-hover/link:translate-x-1"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <CheckCircle size={32} />
        <h2 className="text-3xl font-semibold max-w-xl">
          I adapt <i>quickly</i>.
        </h2>
        <p className="text-muted-foreground">
          When placed in unfamiliar situations, I quickly adjust, learn what is
          necessary to perform, and apply my skills to deliver results. When I
          worked at FamilySearch, I rapidly learned the company&apos;s tools and
          processes to contribute to successful project outcomes.
        </p>
        <Link
          href="/experience#family-search"
          className="group/link flex flex-row items-center gap-1 w-fit font-bold text-sm"
        >
          <Lightbulb
            size={16}
            className="mr-1 group-hover/link:text-yellow-500 transition"
          />
          <div>Find out what I did</div>
          <ArrowRight
            size={16}
            className="group-hover/link:opacity-100 opacity-0 transition group-hover/link:translate-x-1"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <Gauge size={32} />
        <h2 className="text-3xl font-semibold max-w-xl">
          I work well under <b>pressure</b>.
        </h2>
        <p className="text-muted-foreground">
          Both inside and outside my career, I love putting my performance
          ability to the test.
        </p>
        <Link
          href="/interests"
          className="group/link flex flex-row items-center gap-1 w-fit font-bold text-sm"
        >
          <Lightbulb
            size={16}
            className="mr-1  group-hover/link:text-yellow-500 transition"
          />
          <div>See what I do under pressure</div>
          <ArrowRight
            size={16}
            className="group-hover/link:opacity-100 opacity-0 transition group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </div>
  )
}

export default ValueStatements
