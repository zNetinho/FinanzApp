import React from 'react';
import Chart from 'react-apexcharts';
import { ContentCard, HeaderCard, TitleCard } from './CardOverview';
import { Card } from '@/components/ui/card';
import dynamic from 'next/dynamic';

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
  | undefined;

type ChartDashBoardProps = {
  type: ChartTypes;
};

const ChartDash = dynamic(() => import('react-apexcharts'), { ssr: false });

function ChartDashboard({ type }: ChartDashBoardProps) {
  const state = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        hideEmptySeries: true,
        fillSeriesColor: false,
        theme: 'dark',
        style: {
          fontSize: '12px',
          fontFamily: undefined,
          backgroundColor: ["#7D7C7C",]
        },
        onDatasetHover: {
            highlightDataSeries: false,
        },
        marker: {
            show: true,
        },
        items: {
           display: 'flex',
        },
        fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
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
        labels: {
          style: {
            colors: '#000000', // Define a cor das legendas
            fontSize: '12px',
            fontWeight: 'bold'
          }
      },
      },
      colors: ["#000000"], // Define as cores do gráfico (linhas ou barras)
      yaxis: {
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: '#000000', // Define a cor dos valores do eixo y
          },
        },
      },
    },
    series: [
      {
        name: 'Gastos',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div className="px-4 lg:w-full ">
      <Card className="w-full dark:bg-paper-dark">
        <HeaderCard>
          <TitleCard className="text-2xl dark:text-white">Gastos mensais</TitleCard>
        </HeaderCard>
        <ContentCard className="w-full">
          <ChartDash
            options={state.options}
            series={state.series}
            type={type}
            width="100%"
            height={400}
          />
        </ContentCard>
      </Card>
    </div>
  );
}

export default ChartDashboard;
