import Link from 'next/link'

import { cardConfig } from '@/config/features'
import { Button } from '@/components/ui/button'
import { Globe } from '@/components/marketing/globe'

import {
  CardContainer,
  CardContent,
  CardFeature,
  CardFeatureContainer,
  CardHeader,
  CardIcon,
  CardTitle,
} from './card-components'

export function MonitoringCard() {
  const { icon, title, features } = cardConfig.monitors
  return (
    <CardContainer>
      <CardHeader>
        <CardIcon icon={icon} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Globe />
        <CardFeatureContainer>
          {features?.map((feature, i) => <CardFeature key={i} {...feature} />)}
          {/* <div className="order-first text-center md:order-none">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/play/checker">Playground</Link>
            </Button>
          </div> */}
        </CardFeatureContainer>
      </CardContent>
    </CardContainer>
  )
}
