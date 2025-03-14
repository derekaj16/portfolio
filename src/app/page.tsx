export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-3xl text-primary">Derek Johnson</h1>
          <div className="text-lg text-muted-foreground uppercase leading-2">
            Portfolio
          </div>
        </div>
      </main>
    </div>
  )
}
