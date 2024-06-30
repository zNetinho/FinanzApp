import React from "react";
import Header from "./Header";
import { FooterNavigation } from "./FooterNavigation";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
        <main className="flex h-auto flex-col items-center justify-between">
          {children}
        </main>
      <FooterNavigation />
    </>
  );
}
