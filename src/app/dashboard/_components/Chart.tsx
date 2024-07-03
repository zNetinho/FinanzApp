'use client'
import React from 'react'
import Chart from 'react-apexcharts'
import { ContentCard, HeaderCard, TitleCard } from './CardOverview'
import { Card } from '@/components/ui/card'

type ChartTypes =
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'boxPlot'
  | 'radar'
  | 'polarArea'
  | 'rangeBar'
  | 'rangeArea'
  | 'treemap'
  | undefined

type ChartDashBoardProps = {
  type: ChartTypes
}

function ChartDashboard({ type }: ChartDashBoardProps) {
  const state = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
        ],
      },
    },
    series: [
      {
        name: 'Gastos',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  }

  return (
    <div className="p-4 lg:w-full">
      <Card className="w-full">
        <HeaderCard>
          <TitleCard className="text-2xl">Gastos mensais</TitleCard>
        </HeaderCard>
        <ContentCard className="w-full">
          <Chart
            options={state.options}
            series={state.series}
            type={type}
            width="100%"
            height={400}
          />
        </ContentCard>
      </Card>
    </div>
  )
}

export default ChartDashboard
