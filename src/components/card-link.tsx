import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export const CardLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href} className="group ">
      <Button
        variant="ghost"
        className="flex flex-row items-center gap-1 w-fit cursor-pointer"
      >
        <div className="font-semibold">{children}</div>
        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </Button>
    </Link>
  )
}
