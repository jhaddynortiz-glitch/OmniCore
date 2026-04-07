import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">OmniCore</h1>
      <p className="text-slate-600 mb-8">CMS de Gestión de Ventas para WhatsApp</p>
      <Link href="/dashboard">
        <Button size="lg">Ir al Panel de Control</Button>
      </Link>
    </div>
  );
}