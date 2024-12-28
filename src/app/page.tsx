import { ShadcnShowcase } from '../components/shadcn-showcase'
import { ClickCounter } from '../components/click-counter'
import { MetricsChart } from '../components/metrics-chart'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className="flex flex-col items-center gap-12 w-full">
        <ClickCounter />
        <MetricsChart />
        <ShadcnShowcase />
      </div>
    </main>
  )
}
