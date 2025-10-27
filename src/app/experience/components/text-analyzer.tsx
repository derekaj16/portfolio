import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import bt from '../../../../public/img/sustainability.png'
import { LogoCircle } from '@/components/logo-circle'
import rLogo from '../../../../public/img/Rlogo.png'
import dockerLogo from '../../../../public/img/docker.png'

// detect dark mode at render time (safe for SSR)

const TextAnalyzer = () => {
  return (
    <div id="text-analyzer" className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center">
            <h2 className="text-xl sm:text-2xl font-medium">Text Analyzer</h2>
            <div className="italic text-muted-foreground ml-5 pl-5 border-l border-muted-foreground/50 text-base sm:text-lg">
              Freelance Developer
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <LinkIcon size={16} className="text-muted-foreground" />
            <Link
              href="https://www.sustainability-stages.life/upload"
              target="_blank"
              className="text-sky-500 hover:text-sky-400 transition"
            >
              https://www.sustainability-stages.life/upload
            </Link>
          </div>
        </div>
        <Image
          src={bt}
          width={75}
          height={75}
          className="rounded-lg shadow-2xl"
          alt="BeThere Logo"
        />
      </div>

      <div className="flex flex-row gap-1 my-3">
        <LogoCircle image={rLogo} name="R" />
        <LogoCircle image={dockerLogo} name="Docker" />
      </div>

      <div className="italic text-muted-foreground">July 2024</div>

      <div className="flex flex-col gap-6">
        <p>
          I was recruited by two international university professors to bring
          their R script to life so others could access it and use it. The
          purpose of the script was to analyze any number of text files and
          return data based on keyword content.
        </p>

        <p>
          I deployed the R script by modifying it slightly to allow me to deploy
          it in a Docker container on Google Cloud. This provided for a very
          reliable endpoint that was also very fast.
        </p>

        <p>
          The challenge of this project was figuring out how to deploy without
          using RShiny to host my endpoint, which would require a massive yearly
          payment to have a custom domain name for the website. I had prior
          experience with Docker and knew that would be the easiest way to
          package the endpoint and deploy it on a cloud service.
        </p>
      </div>
    </div>
  )
}

export default TextAnalyzer
