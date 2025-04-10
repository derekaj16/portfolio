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
import dtDemo from '../../../public/img/dt-demo.gif'
import { CardLink } from '@/components/card-link'
import { LogoCircle } from '@/components/logo-circle'
import reactLogo from '../../../public/img/react.png'
import tsLogo from '../../../public/img/ts.png'
import supabaseLogo from '../../../public/img/supabase.png'
import flutterLogo from '../../../public/img/flutter.png'

export const BeThereCard = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={dtDemo}
            className="w-full rounded-lg mb-2"
            alt="demo of BeThere"
          />
          <CardTitle className="text-2xl font-semibold">BeThere</CardTitle>
          <CardDescription>
            Event Scheduling and Staffing Software
          </CardDescription>
        </CardHeader>
        <div className="p-6">
          I developed and launched a feature-rich event-scheduling app that
          boosts team efficiency, productivity, and collaboration. The idea came
          from my own sports team&apos;s dissatisfaction with other scheduling
          tools that made it difficult to manage events we attended.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={reactLogo} name="React" />
            <LogoCircle image={tsLogo} name="Typescript" />
            <LogoCircle image={supabaseLogo} name="Supabase" />
            <LogoCircle image={flutterLogo} name="Flutter" />
          </div>
          <CardAction>
            <CardLink href="/experience#bethere">Learn more</CardLink>
          </CardAction>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
