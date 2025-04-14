'use client'

import { Card, CardAction, CardContent } from '@/components/ui/card'
import { CardLink } from '@/components/card-link'
import { Award, BriefcaseBusiness, ScrollText } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

const EducationCard = () => {
  const isMobile = useIsMobile()

  return (
    <Card className="py-4">
      <CardContent className="flex flex-col gap-2 px-4">
        <div className="flex flex-row gap-4 items-center px-4 mb-4">
          <div className="min-w-[28px] md:min-w-[46px]">
            <Award size={isMobile ? 28 : 46} />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div>Brigham Young University</div>
            <div className="text-lg font-medium">
              Master and Bachelor of Information Systems Management
            </div>
            <div className="text-muted-foreground">April 2025</div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center px-4">
          <div className="min-w-[28px] md:min-w-[46px]">
            <ScrollText size={isMobile ? 28 : 46} />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div>Amazon Web Services</div>
            <div className="text-lg font-medium">
              AWS Certified Cloud Practitioner
            </div>
            <div className="text-muted-foreground">January 1, 2024</div>
          </div>
        </div>
        <CardAction className="flex flex-row justify-end w-full">
          <CardLink href="/education">Learn more</CardLink>
        </CardAction>
      </CardContent>
    </Card>
  )
}

export default EducationCard
