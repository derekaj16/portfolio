import { Card, CardContent } from '@/components/ui/card'

const InsertCompanyCard = () => {
  return (
    <Card className="hover:border hover:border-cyan-500/50 transition relative">
      <CardContent className="px-4 flex flex-col justify-center items-center h-full">
        <div className="flex flex-row items-center w-full justify-center gap-2">
          <div className="text-6xl -translate-y-1">{`[`}</div>
          <div>
            <div className="text-2xl font-semibold text-center">
              Your website or app
            </div>
            <div className="text-sm text-muted-foreground text-center">
              Insert your company&apos;s project here
            </div>
          </div>
          <div className="text-6xl -translate-y-1">{`]`}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default InsertCompanyCard
