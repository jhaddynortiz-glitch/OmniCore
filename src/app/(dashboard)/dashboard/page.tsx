import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, DollarSign, Users, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Bienvenido, Jhaddyn</h2>
        <p className="text-slate-500">Esto es lo que está pasando en OmniCore hoy.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Chats Activos" 
          value="24" 
          description="+12% desde ayer" 
          icon={<MessageSquare className="text-blue-600" />} 
        />
        <StatsCard 
          title="Ventas Hoy" 
          value="$1,200.00" 
          description="+5% vs promedio" 
          icon={<DollarSign className="text-emerald-600" />} 
        />
        <StatsCard 
          title="Nuevos Clientes" 
          value="14" 
          description="Interceptados hoy" 
          icon={<Users className="text-violet-600" />} 
        />
        <StatsCard 
          title="Tasa de Cierre" 
          value="64%" 
          description="+2% este mes" 
          icon={<TrendingUp className="text-orange-600" />} 
        />
      </div>

      {/* Aquí irá luego la lista de chats recientes */}
      <div className="h-[300px] w-full bg-white rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
        Próximamente: Gráfico de actividad de mensajes
      </div>
    </div>
  );
}

function StatsCard({ title, value, description, icon }: any) {
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
}