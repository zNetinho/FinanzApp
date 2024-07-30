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
    <Card className='dark:bg-paper-dark'>
      <HeaderCard className="flex flex-row gap-10 items-center justify-around">
        <TitleCard className="text-base">Overview</TitleCard>
            <Button variant="outline" className="border">
              VIEW ALL
            </Button>
      </HeaderCard>
      <ContentCard className="flex flex-wrap gap-6">
        {list.map((e, index) => (
          <div key={index} className="flex flex-col flex-shrink">
            <span className="text-xs text-default-dark dark:text-white">{e.category}</span>
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