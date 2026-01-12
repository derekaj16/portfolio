'use client'

import { Card, CardAction, CardContent } from '@/components/ui/card'
import { CardLink } from '@/components/card-link'
import { BriefcaseBusiness } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

const WorkExperienceCard = () => {
  const isMobile = useIsMobile()

  return (
    <Card className="py-4">
      <CardContent className="flex flex-col gap-2 px-4">
        <div className="flex flex-row gap-4 items-center px-4 mb-4">
          <div className="min-w-[28px] md:min-w-[46px]">
            <BriefcaseBusiness size={isMobile ? 28 : 46} />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div>Software, Web, and App Dev</div>
            <div className="text-lg font-medium">
              3+ Years of Real Work Experience
            </div>
            <div className="text-muted-foreground">
              BeThere, Sunwest Bank, FamilySearch, MTC, BYU
            </div>
          </div>
        </div>

        <CardAction className="flex flex-row justify-end w-full">
          <CardLink href="/experience">Learn more</CardLink>
        </CardAction>
      </CardContent>
    </Card>
  )
}

export default WorkExperienceCard
