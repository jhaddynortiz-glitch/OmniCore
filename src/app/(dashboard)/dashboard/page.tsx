import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, DollarSign, Users, TrendingUp } from "lucide-react";
import { db } from "@/lib/db"

export default async function DashboardPage() {
  const totalContacts = await db.contact.count()
  const totalMessages = await db.message.count()
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Bienvenido, Jhaddyn</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white rounded-xl border shadow-sm">
          <p className="text-sm text-slate-500">Contactos Totales</p>
          <p className="text-4xl font-bold">{totalContacts}</p>
        </div>
        <div className="p-6 bg-white rounded-xl border shadow-sm">
          <p className="text-sm text-slate-500">Mensajes Interceptados</p>
          <p className="text-4xl font-bold">{totalMessages}</p>
        </div>
      </div>
    </div>
  )
}

/* function StatsCard({ title, value, description, icon }: any) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
        <div className="h-8 w-8 bg-slate-50 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-slate-400 mt-1">{description}</p>
      </CardContent>
    </Card>
  );
} */