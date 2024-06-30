import Header from "@/components/Header";
import Image from "next/image"

import { FooterNavigation } from "@/components/FooterNavigation";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <FooterNavigation />
    </main>
  );
}
