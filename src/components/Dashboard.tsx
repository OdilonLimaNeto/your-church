
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Calendar, TrendingUp } from "lucide-react";

export const Dashboard = () => {
  const stats = [
    {
      title: "Saldo Total",
      value: "R$ 15.750,00",
      icon: DollarSign,
      change: "+12%",
      color: "text-green-600"
    },
    {
      title: "Membros Ativos",
      value: "342",
      icon: Users,
      change: "+5%",
      color: "text-blue-600"
    },
    {
      title: "Atividades do Mês",
      value: "12",
      icon: Calendar,
      change: "+3%",
      color: "text-purple-600"
    },
    {
      title: "Frequência Média",
      value: "85%",
      icon: TrendingUp,
      change: "+8%",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Visão geral do sistema de gestão da igreja</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className={`text-xs ${stat.color} mt-1`}>
                  {stat.change} desde o mês passado
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Culto Dominical", date: "Hoje, 19:00", attendees: 180 },
              { title: "Reunião de Oração", date: "Quarta, 19:30", attendees: 45 },
              { title: "Escola Bíblica", date: "Domingo, 09:00", attendees: 120 },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600">{activity.attendees} pessoas</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Finanças do Mês</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Dízimos</span>
                <span className="font-semibold text-green-600">R$ 8.500,00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Ofertas</span>
                <span className="font-semibold text-green-600">R$ 3.200,00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Despesas</span>
                <span className="font-semibold text-red-600">R$ 2.150,00</span>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Saldo Líquido</span>
                <span className="font-bold text-blue-600">R$ 9.550,00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
