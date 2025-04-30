// import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
// import pdf from '../../../public/'

const ShareResume = () => {
  return (
    <TooltipProvider>
      <Card className="p-0 bg-background dark:bg-input/30 rounded-md shadow-xs">
        <CardContent className="px-2 flex flex-row gap-2 items-center py-[6px]">
          <div className="text-xs font-medium">My Resume</div>
          <Tooltip delayDuration={500}>
            <TooltipTrigger asChild>
              <Link href="/DerekJohnsonResume.pdf" target="_blank" download>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                >
                  <div>
                    <Download size={28} />
                  </div>
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download</p>
            </TooltipContent>
          </Tooltip>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}

export default ShareResume
