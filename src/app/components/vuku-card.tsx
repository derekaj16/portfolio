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
import vuku from '../../../public/img/vuku.png'
import { CardLink } from '@/components/card-link'
import { LogoCircle } from '@/components/logo-circle'
import reactLogo from '../../../public/img/react.png'
import tsLogo from '../../../public/img/ts.png'
import supabaseLogo from '../../../public/img/supabase.png'

const VukuCard = () => {
  // detect dark mode at render time (safe for SSR)
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={vuku}
            className="w-full rounded-lg mb-2"
            alt="demo of Vuku"
          />
          <CardTitle className="text-2xl font-semibold">Vuku</CardTitle>
          <CardDescription>
            Freelance Project Management Platform
          </CardDescription>
        </CardHeader>
        <div className="p-6">
          I built platform that automates project management, time tracking &
          hours, product updates to clients from the user, and invoicing using
          AI-integrated tools.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={reactLogo} name="React" />
            <LogoCircle image={tsLogo} name="Typescript" />
            <LogoCircle image={supabaseLogo} name="Supabase" />
          </div>
          <CardAction>
            <CardLink href="https://vuku.dev">Learn more</CardLink>
          </CardAction>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default VukuCard
