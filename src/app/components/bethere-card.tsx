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
import bethere from '../../../public/img/bethere.png'
import { CardLink } from '@/components/card-link'
import { LogoCircle } from '@/components/logo-circle'
import reactLogo from '../../../public/img/react.png'
import tsLogo from '../../../public/img/ts.png'
import supabaseLogo from '../../../public/img/supabase.png'
import expoLight from '../../../public/img/expo-light.png'
import expoDark from '../../../public/img/expo-dark.png'

const BeThereCard = () => {
  // detect dark mode at render time (safe for SSR)
  const isDark =
    typeof window !== 'undefined' &&
    (document.documentElement.classList.contains('dark') ||
      (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches))

  const expoImage = isDark ? expoDark : expoLight

  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={bethere}
            className="w-full rounded-lg mb-2"
            alt="demo of BeThere"
          />
          <CardTitle className="text-2xl font-semibold">BeThere</CardTitle>
          <CardDescription>
            Event Scheduling and Staffing Software
          </CardDescription>
        </CardHeader>
        <div className="p-6">
          Inspired by the frustrations my sports team faced managing our events
          with existing tools, I developed and launched a feature-rich
          event-scheduling app that boosts team efficiency, productivity, and
          collaboration.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={reactLogo} name="React" />
            <LogoCircle image={tsLogo} name="Typescript" />
            <LogoCircle image={supabaseLogo} name="Supabase" />
            <LogoCircle image={expoImage} name="Expo" />
          </div>
          <CardAction>
            <CardLink href="/experience#bethere">Learn more</CardLink>
          </CardAction>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default BeThereCard
