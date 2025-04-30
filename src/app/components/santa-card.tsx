import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import santaPic from '../../../public/img/santa.jpeg'
import { LogoCircle } from '@/components/logo-circle'
import reactLogo from '../../../public/img/react.png'
import jsLogo from '../../../public/img/js.png'
import supabaseLogo from '../../../public/img/supabase.png'

const SantaCard = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={santaPic}
            className="w-full rounded-lg mb-2"
            alt="demo of BeThere"
          />
          <CardTitle className="text-2xl font-semibold">Secret Santa</CardTitle>
          <CardDescription>AI-powered Secret Santa Generator</CardDescription>
        </CardHeader>
        <div className="p-6">
          I got tired of pulling names out of a hat, so I created a web app
          where participants would have to give the Santa AI a phrase to prompt
          him to reveal their secret santa.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={reactLogo} name="React" />
            <LogoCircle image={jsLogo} name="Javascript" />
            <LogoCircle image={supabaseLogo} name="Supabase" />
          </div>
          {/* <CardAction>
            <CardLink href="/experience#bethere">Learn more</CardLink>
          </CardAction> */}
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default SantaCard
