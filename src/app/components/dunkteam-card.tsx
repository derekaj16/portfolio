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
import { CardLink } from '@/components/card-link'
import dunkPic from '../../../public/img/dunk2.jpg'

const DunkTeamCard = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={dunkPic}
            className="w-full rounded-lg mb-2"
            alt="Picture of me dunking a basketball"
          />
          <CardTitle className="text-2xl font-semibold">
            Trampoline Dunking
          </CardTitle>
          <CardDescription>BYU Dunk Team</CardDescription>
        </CardHeader>
        <div className="p-6">
          I spent 4 years on the coolest and most unique athletic team in the
          nation. While on the BYU Dunk Team, I performed at hundreds of
          different events flipping, tricking, breakdancing, and dunking.
        </div>
        <CardFooter className="flex flex-row justify-end items-center absolute bottom-4 w-full">
          {/* <div className="flex flex-row gap-1">
            <LogoCircle image={beethovenPic} name="Beethoven" />
            <LogoCircle image={chopinPic} name="Chopin" />
            <LogoCircle image={bachPic} name="Bach" />
            <LogoCircle image={debussyPic} name="Debussy" />
          </div> */}
          <CardAction className="sm:mb-1">
            <CardLink href="/interests#dunkteam">Learn more</CardLink>
          </CardAction>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default DunkTeamCard
