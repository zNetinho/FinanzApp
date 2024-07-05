import { Card } from '@/components/ui/card'
import React from 'react'
import { ContentCard, HeaderCard, TitleCard } from '../CardOverview'
import { Button } from '@/components/ui/button'
import { formatterCurrencyMoney } from '@/lib/formatterCurrency'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FormTransactions } from './FormTransactions'

export type CardTransictions = {
  icon: React.ReactNode
  namePurchase?: string
  datePurchase?: string
  valuePurchase: number
}

export type ListCardTransictions = {
  list: CardTransictions[]
}

function CardTransactions({ list }: ListCardTransictions) {
  return (
    <Card className='dark:bg-paper-dark'>
      <HeaderCard className="flex flex-row gap-10 items-center justify-around">
        <TitleCard className="text-base">Transactions</TitleCard>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Add Transaction</Button>
          </PopoverTrigger>
          <PopoverContent className="bg-paper-dark">
            <FormTransactions />
          </PopoverContent>
        </Popover>  
      </HeaderCard>
      <ContentCard>
        <ul>
          {list.map((e, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span>{e.icon}</span>
                <div className="flex flex-col py-2">
                  <span className="p-0 dark:text-white">{e.namePurchase}</span>
                  <span className="text-xs text-default-dark">
                    {e.datePurchase}
                  </span>
                </div>
              </div>
              <div>{formatterCurrencyMoney.format(e.valuePurchase)}</div>
            </li>
          ))}
        </ul>
      </ContentCard>
    </Card>
  )
}

export default CardTransactions
