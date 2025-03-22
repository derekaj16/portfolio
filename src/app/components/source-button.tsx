// import { Button } from '@/components/ui/button'
import { Code2 } from 'lucide-react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const SourceCodeButton = () => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Link href="https://github.com/derekaj16/portfolio" target="_blank">
            <Button
              type="button"
              variant="ghost"
              className="cursor-pointer py-6"
            >
              <div>
                <Code2 size={28} />
              </div>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>View source code for this website</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SourceCodeButton
