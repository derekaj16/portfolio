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
import rLogo from '../../../public/img/Rlogo.png'
import dockerLogo from '../../../public/img/docker.png'

const TextAnalyzerCard = () => {
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
            Research Text Analyzer
          </CardTitle>
          <CardDescription>Data Analysis Tool</CardDescription>
        </CardHeader>
        <div className="p-6">
          I was contracted to build the infrastructure for an R-based tool
          developed by two professors. They had been trying for years to make it
          accessible to other researchers and the public, and within a week I
          had deployed it online and implemented key improvements.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={rLogo} name="R" />
            <LogoCircle image={dockerLogo} name="Docker" />
          </div>
          <CardAction>
            <CardLink href="/experience#text-analyzer">Learn more</CardLink>
          </CardAction>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default TextAnalyzerCard
