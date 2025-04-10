import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import recipesDemo from '../../../public/img/recipe.gif'
// import { CardLink } from '@/components/card-link'
import { LogoCircle } from '@/components/logo-circle'
import reactLogo from '../../../public/img/react.png'
import tsLogo from '../../../public/img/ts.png'
import supabaseLogo from '../../../public/img/supabase.png'

export const RecipeAppCard = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={recipesDemo}
            className="w-full rounded-lg mb-2"
            alt="demo of BeThere"
          />
          <CardTitle className="text-2xl font-semibold">Recipes App</CardTitle>
          <CardDescription>Current Side Project</CardDescription>
        </CardHeader>
        <div className="p-6">
          I&apos;m developing an OP recipes app to make my food life easier.
          This app is not yet released but soon will be!
          {/* I am developing an OP recipes app. Features include but not limited
          to: */}
          {/* <ul className="list-disc pl-6 space-y-2 my-2 mb-3">
            <li>Automatic grocery lists</li>
            <li>Share recipes with anyone</li>
            <li>Different ways to filter and favorite recipes</li>
            <li>
              Upload recipes through:
              <ul className="list-disc pl-6 space-y-1">
                <li>Text processing</li>
                <li>OCR</li>
                <li>Website link</li>
                <li>File upload</li>
              </ul>
            </li>
          </ul> */}
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={reactLogo} name="React" />
            <LogoCircle image={tsLogo} name="Typescript" />
            <LogoCircle image={supabaseLogo} name="Supabase" />
          </div>
          {/* <CardAction>
            <CardLink href="/experience">Learn more</CardLink>
          </CardAction> */}
        </CardFooter>
      </CardContent>
    </Card>
  )
}
