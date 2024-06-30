import React from 'react'
import { CardOverview } from './_components/CardOverview'
import CardTransactions, { CardTransictions } from './_components/CardTransactions'
import { CoinsIcon, ShoppingBagIcon, UtensilsCrossedIcon } from 'lucide-react'


function Page() {
  const list = [
    {
      category: "Incomes",
      total_amount: 5234
    },
    {
      category: "Balance",
      total_amount: 123456
    },
    {
      category: "Expenses",
      total_amount: 2789
    },
    {
      category: "Savings",
      total_amount: 3456
    },
  ]

  const listTransictionsFake = [
    {
      icon: <ShoppingBagIcon />,
      namePurchase: "Amazon",
      datePurchase: "15 Aug",
      valuePurchase: 1234
    },
    {
      icon: <CoinsIcon />,
      namePurchase: "Salary",
      datePurchase: "05 Aug",
      valuePurchase: 1234
    },
    {
      icon: <UtensilsCrossedIcon />,
      namePurchase: "Dinner",
      datePurchase: "01 Aug",
      valuePurchase: 1234
    },
  ]

  return (
    <section className='px-7 py-5'>
      <div className='w-1/4'>
        <CardOverview
          list={list}
        />
        <CardTransactions
          list={listTransictionsFake}
        />
      </div>
    </section>
  )
}

export default Page
