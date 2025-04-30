import { LinkIcon } from 'lucide-react'
import Link from 'next/link'

const Certifications = () => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Certifications</h2>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">AWS Certified Cloud Practitioner</h3>
        <div className="italic text-muted-foreground">January 1, 2024</div>
        <div className="flex flex-row gap-3 items-center">
          <LinkIcon size={20} className="text-muted-foreground" />
          <Link
            href="https://www.credly.com/badges/5db50e60-0f8c-45cc-ad87-54a87048fb1f/"
            target="_blank"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            credly.com/badges
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Certifications
