import React from 'react'
import { CardOverview } from './_components/CardOverview'
import CardTransactions from './_components/CardTransactions'
import { CoinsIcon, ShoppingBagIcon, UtensilsCrossedIcon } from 'lucide-react'
import ChartDashboard from './_components/Chart'

function Page() {
  const list = [
    {
      category: 'Incomes',
      total_amount: 5234,
    },
    {
      category: 'Balance',
      total_amount: 123456,
    },
    {
      category: 'Expenses',
      total_amount: 2789,
    },
    {
      category: 'Savings',
      total_amount: 3456,
    },
  ]

  const listTransictionsFake = [
    {
      icon: <ShoppingBagIcon />,
      namePurchase: 'Amazon',
      datePurchase: '15 Aug',
      valuePurchase: 1234,
    },
    {
      icon: <CoinsIcon />,
      namePurchase: 'Salary',
      datePurchase: '05 Aug',
      valuePurchase: 1234,
    },
    {
      icon: <UtensilsCrossedIcon />,
      namePurchase: 'Dinner',
      datePurchase: '01 Aug',
      valuePurchase: 1234,
    },
  ]

  return (
    <section className="w-full md:flex max-lg:flex-col gap-4 px-7 py-5 h-auto">
      <div className="max-lg:w-full w-1/4 min-h-min flex flex-col gap-4">
        <CardOverview list={list} />
        <CardTransactions list={listTransictionsFake} />
      </div>
      <div className="w-full border rounded-lg lg:flex">
        {/* Gastos mensais gráfico */}
        <ChartDashboard type="bar" />
        <ChartDashboard type="line" />
      </div>
    </section>
  )
}

export default Page
