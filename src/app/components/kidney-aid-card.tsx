'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Image from 'next/image'
import kf1 from '../../../public/img/kf1.png'
import kf2 from '../../../public/img/kf2.png'
import kf4 from '../../../public/img/kf4.jpeg'
import kf5 from '../../../public/img/kf5.jpeg'
import { LogoCircle } from '@/components/logo-circle'
import pythonLogo from '../../../public/img/python.png'
import djangoLogo from '../../../public/img/django.png'
import Autoplay from 'embla-carousel-autoplay'

const KidneyAid = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="p-0 pb-8">
        <CardHeader>
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={kf1}
                  className="w-full rounded-lg mb-2"
                  alt="Home screen of KidneyAid"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={kf5}
                  className="w-full rounded-lg mb-2"
                  alt="Food diary page"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={kf2}
                  className="w-full rounded-lg mb-2"
                  alt="Nutrient warnings"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={kf4}
                  className="w-full rounded-lg mb-2"
                  alt="User health charts"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <CardTitle className="text-2xl font-semibold">KidneyAid</CardTitle>
          <CardDescription>
            Nutrition Diary and Nutrient Tracker
          </CardDescription>
        </CardHeader>
        <div className="p-6">
          Given as a challenge during my first semester in the IS program at
          BYU, my group and I created a full-fledged nutrient tracker to help
          others with their health and micronutrient intake.
        </div>
        <CardFooter className="flex flex-row justify-between items-center absolute bottom-4 w-full">
          <div className="flex flex-row gap-1">
            <LogoCircle image={pythonLogo} name="Python" />
            <LogoCircle image={djangoLogo} name="Django" />
          </div>
          {/* <CardAction>
            <CardLink href="/experience#bethere">Learn more</CardLink>
          </CardAction> */}
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default KidneyAid
