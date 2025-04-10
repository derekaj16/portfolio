'use client'

import { StaticImageData } from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

export const LogoCircle = ({
  image,
  name,
}: {
  image: StaticImageData
  name: string
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div className="border border-cyan-500/30 rounded-full p-1">
            <Avatar className="w-5 h-5 lg:w-8 lg:h-8">
              <AvatarImage src={image.src} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
