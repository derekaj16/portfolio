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
import piano from '../../../public/img/piano.png'
import { CardLink } from '@/components/card-link'
import { LogoCircle } from '@/components/logo-circle'
import beethovenPic from '../../../public/img/beethoven.jpg'
import chopinPic from '../../../public/img/chopin.jpg'
import debussyPic from '../../../public/img/debussy.png'
import bachPic from '../../../public/img/bach.jpg'

const PianoCard = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Image
            src={piano}
            className="w-full rounded-lg mb-2"
            alt="Picture of me playing the piano"
          />
          <CardTitle className="text-2xl font-semibold">Piano</CardTitle>
          <CardDescription>
            Artist-Level Musician and Classical Pianist
          </CardDescription>
        </CardHeader>
        <div className="p-6">
          Since I was 11 years old, I have been fine-tuning the art of classical
          performance. Frequent practice and frequent performance has taught me
          what it means to truly master a skill and be able to perform under
          pressure.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={beethovenPic} name="Beethoven" />
            <LogoCircle image={chopinPic} name="Chopin" />
            <LogoCircle image={bachPic} name="Bach" />
            <LogoCircle image={debussyPic} name="Debussy" />
          </div>
          <CardAction>
            <CardLink href="/interests#piano">Learn more</CardLink>
          </CardAction>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default PianoCard
