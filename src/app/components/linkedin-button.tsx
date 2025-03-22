import LinkedInIcon from '@/components/linkedin'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import RCircleIcon from '../../../public/r-circle'

const LinkedInButton = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/derekaj/"
      target="_blank"
      className="cursor-pointer"
    >
      <Button
        variant="ghost"
        className="flex flex-row gap-5 pl-6 py-6 cursor-pointer"
      >
        <div className="relative">
          <LinkedInIcon className="scale-200" />
          <RCircleIcon className="absolute scale-[13%] translate-x-[18px] -translate-y-[6px]" />
        </div>
        <div className=" text-start text-xs">
          View my
          <br />
          LinkedIn profile
        </div>
      </Button>
    </Link>
  )
}

export default LinkedInButton
