'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { formatterCurrencyMoney } from '@/lib/formatterCurrency'
import { cn } from '@/lib/utils'
import React from 'react'
import { FormTransactions } from './transactions/FormTransactions'

type Props<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

function HeaderCard({ children, className }: Props) {
  return <CardHeader className={cn(['', className])}>{children}</CardHeader>
}

function TitleCard({ children, className }: Props) {
  return <CardTitle className={cn(['', className])}>{children}</CardTitle>
}

function DescriptionCard({ children, className }: Props) {
  return (
    <CardDescription className={cn(['', className])}>
      {children}
    </CardDescription>
  )
}

function ContentCard({ children, className }: Props) {
  return <CardContent className={cn(['', className])}>{children}</CardContent>
}

type OverviewProps = {
  category: string
  total_amount: number
}

type MockPropsOverview = {
  list: OverviewProps[]
}

function CardOverview({ list }: MockPropsOverview) {
  return (
    <Card>
      <HeaderCard className="flex flex-row gap-10 items-center justify-around">
        <TitleCard className="text-base">Overview</TitleCard>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="border">
              VIEW ALL
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 drop-shadow-md">
            <FormTransactions />
            {/* <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div> */}
          </PopoverContent>
        </Popover>
      </HeaderCard>
      <ContentCard className="flex flex-wrap gap-6">
        {list.map((e, index) => (
          <div key={index} className="flex flex-col flex-shrink">
            <span className="text-xs text-default-dark">{e.category}</span>
            <p className="text-lg font-medium">
              {formatterCurrencyMoney.format(e.total_amount)}
            </p>
          </div>
        ))}
      </ContentCard>
    </Card>
  )
}

export { CardOverview, ContentCard, DescriptionCard, HeaderCard, TitleCard }
