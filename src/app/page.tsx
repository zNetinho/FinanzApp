import { FooterNavigation } from "@/components/FooterNavigation";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FooterNavigation />
      <Header />
    </main>
  );
}
