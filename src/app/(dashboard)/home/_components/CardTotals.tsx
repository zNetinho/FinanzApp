import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatterCurrencyMoney } from '@/lib/formatterCurrency';
import { DollarSignIcon } from 'lucide-react';

type CardTotalsPropsGeneric = {
  title?: string;
  valueAmount?: number | string;
  subTitle?: string | number;
}

function CardTotals({title = "Total Balance", valueAmount = 12345.67, subTitle = "Your current account balance"}: CardTotalsPropsGeneric) {
  return (
    <Card className='w-1/3 dark:bg-default-dark bg-white'>
      <CardHeader>
        <div className="flex flex-row items-center justify-between pb-2">
          <CardTitle>
            { title }
          </CardTitle>
          <DollarSignIcon className="h-4 w-4 text-muted-foreground dark:text-white" />
        </div>
        <CardDescription className='dark:text-white'>
          { subTitle }
        </CardDescription>
      </CardHeader>
      <CardContent>
        { formatterCurrencyMoney.format(Number(valueAmount)) }
      </CardContent>
    </Card>
  )
}

CardTotals.propTypes = {}

export default CardTotals
