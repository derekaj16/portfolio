'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const BackButton = () => {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="group flex flex-row items-center gap-1 w-fit cursor-pointer"
    >
      <ArrowLeft
        size={16}
        className="group-hover:opacity-100 opacity-0 transition"
      />
      <h2 className="-translate-x-5 group-hover:translate-x-0 transition">
        Back
      </h2>
    </button>
  )
}
