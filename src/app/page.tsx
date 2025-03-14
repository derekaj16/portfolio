export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-lg text-muted-foreground uppercase leading-2 font-medium">
              Portfolio
            </div>
            <h1 className="text-5xl text-primary font-semibold">
              Derek Johnson
            </h1>
            <div className="text-gray-400">
              My portfolio is simple so I can focus on things that actually
              matter.
            </div>
          </div>

          <div>
            <h2>Education</h2>
          </div>
          <div>
            <h2>Experience</h2>
          </div>
          <div>
            <h2>Hobbies/Interests</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
