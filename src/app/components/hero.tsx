import { ArrowDown } from 'lucide-react'
import * as motion from 'motion/react-client'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
      className="flex flex-col gap-4 h-screen justify-center relative"
    >
      <div className="text-lg text-muted-foreground uppercase leading-2 font-medium">
        Portfolio
      </div>
      <h1 className="text-5xl text-primary font-semibold">Derek Johnson</h1>
      <div className="text-muted-foreground">
        A dedicated software engineer and entrepreneur
        {/* I take initiative where it&apos;s not required, but it makes a
              difference. */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 1.5 }}
        className="absolute bottom-10 animate-bounce left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={30} className="animate-bounce text-muted-foreground" />
      </motion.div>
    </motion.div>
  )
}

export default Hero
