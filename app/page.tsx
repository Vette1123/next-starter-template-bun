import { MarketingLayout } from '@/components/layout/marketing-layout'
import { MonitoringCard } from '@/components/marketing/card'
import { Hero } from '@/components/marketing/hero'
import { Partners } from '@/components/marketing/partners'

export const revalidate = 600

export default async function Page() {
  return (
    <MarketingLayout>
      <div className="grid gap-8">
        <Hero />
        <Partners />
        <MonitoringCard />
      </div>
    </MarketingLayout>
  )
}
