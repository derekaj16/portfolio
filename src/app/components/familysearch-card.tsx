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
import fsDemo from '../../../public/img/ai-search.gif'
import { CardLink } from '@/components/card-link'
import { LogoCircle } from '@/components/logo-circle'
import reactLogo from '../../../public/img/react.png'
import jsLogo from '../../../public/img/js.png'

export const FamilySearchCard = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={fsDemo}
            className="w-full rounded-lg mb-2"
            alt="demo of BeThere"
          />
          <CardTitle className="text-2xl font-semibold">Help Search</CardTitle>
          <CardDescription>AI-Powered Search Tool</CardDescription>
        </CardHeader>
        <div className="p-6">
          I proactively led early development of an AI-powered search tool using
          the OpenAI API while teammates were occupied with other projects,
          accelerating its delivery and integration; the tool draws upon
          FamilySearch resources for answers and is built with custom
          FamilySearch components.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={reactLogo} name="React" />
            <LogoCircle image={jsLogo} name="Javascript" />
          </div>
          <CardAction>
            <CardLink href="/experience#family-search">Learn more</CardLink>
          </CardAction>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
