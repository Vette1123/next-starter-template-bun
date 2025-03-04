import { Suspense } from 'react'
import { ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
// import type { StatusWidgetProps } from "@openstatus/react";
// import { StatusWidget } from "@openstatus/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function StatusWidgetFallback() {
  return (
    <div className="flex max-w-fit items-center gap-2 rounded-md border border-border px-3 py-1 text-sm">
      <span className="h-5 w-20 animate-pulse rounded-md bg-muted" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-muted" />
    </div>
  )
}

export function StatusWidgetContainer(props: any) {
  return (
    <Suspense fallback={<StatusWidgetFallback />}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="max-w-min">{/* <StatusWidget {...props} /> */}</div>
          </TooltipTrigger>
          <TooltipContent asChild>
            <Button variant="link" size="sm" asChild>
              <a target="_blank" href="/" rel="noreferrer">
                Install your own <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Suspense>
  )
}
