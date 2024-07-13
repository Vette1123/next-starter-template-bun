import { ValidIcon } from '@/components/icons'

export type FeatureDescription = {
  icon: ValidIcon
  catchline: string
  description: string
  badge?: 'Coming soon' | 'New'
}

export type Feature = {
  icon: ValidIcon
  title: string
  // description?: string;
  features?: FeatureDescription[]
}
