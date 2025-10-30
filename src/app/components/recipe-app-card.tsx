import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import coconut from '../../../public/img/coconut.png'
import { LogoCircle } from '@/components/logo-circle'
import reactLogo from '../../../public/img/react.png'
import tsLogo from '../../../public/img/ts.png'
import supabaseLogo from '../../../public/img/supabase.png'

const RecipeAppCard = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={coconut}
            className="w-full rounded-lg mb-2 max-h-48 object-contain bg-amber-50"
            alt="demo of BeThere"
          />
          <CardTitle className="text-2xl font-semibold">Recipes App</CardTitle>
          <CardDescription>Current Side Project</CardDescription>
        </CardHeader>
        <div className="p-6">
          I&apos;m developing an OP recipes app to make my food life easier. The
          app will have everything from recipe management to meal planning,
          instant grocery lists, and AI.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={reactLogo} name="React" />
            <LogoCircle image={tsLogo} name="Typescript" />
            <LogoCircle image={supabaseLogo} name="Supabase" />
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default RecipeAppCard
