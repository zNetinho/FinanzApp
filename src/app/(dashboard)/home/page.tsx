'use client'
import React from "react";
import CardTotals from "./_components/CardTotals";
import ChartDashboard from "../_components/Chart";

function Page() {
  return (
    <section className="w-full md:flex max-lg:flex-col gap-4 px-7 py-5 h-auto">
      <main className="w-full flex-col">
        <h2>
          Bem vindo
        </h2>
        <div className="flex gap-4 flex-1">
          {/* Receitas */}
          <CardTotals />
          {/* Receitas */}
          {/* Gastos */}
          <CardTotals
            title="Total Expenses"
            subTitle={"Your current account balance"}
            valueAmount={-12345.67}
          />
          {/* Gastos */}
          {/* Gráfico de gastos */}
          <div className="w-1/3">
            <ChartDashboard type="bar"/>
          </div>
          {/* Grafico de gastos */}
        </div>
      </main>
      {/* 3 cards de informações, total de entradas, total de saídas é as ações */}
      {/* https://v0.dev/r/FcIVyWKgLVl -> mesclar modelos 01 e 03 */}
    </section>
  );
}

export default Page;
