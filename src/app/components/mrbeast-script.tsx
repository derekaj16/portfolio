import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import textAnalyzer from '../../../public/img/text-analyzer.png'
import { CardLink } from '@/components/card-link'
import { LogoCircle } from '@/components/logo-circle'
import python from '../../../public/img/python.png'
import playwrightLogo from '../../../public/img/playwright-logo.svg'

const MrBeastScript = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={textAnalyzer}
            className="w-full rounded-lg mb-2"
            alt="demo of BeThere"
          />
          <CardTitle className="text-2xl font-semibold">
            Playwright Script for MrBeast Giveaway
          </CardTitle>
          <CardDescription>Made my life easier</CardDescription>
        </CardHeader>
        <div className="p-6">
          I was contracted to build the infrastructure for an R-based tool
          developed by two professors. They had been trying for years to make it
          accessible to other researchers and the public, and within a week I
          had deployed it online and implemented key improvements.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={python} name="Python" />
            <LogoCircle image={playwrightLogo} name="Playwright" />
          </div>
          <CardAction>
            <CardLink href="/experience#text-analyzer">Learn more</CardLink>
          </CardAction>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default MrBeastScript
