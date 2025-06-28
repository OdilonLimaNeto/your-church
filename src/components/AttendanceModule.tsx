
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckSquare, Calendar, Users } from "lucide-react";

export const AttendanceModule = () => {
  const [selectedActivity, setSelectedActivity] = useState("");

  const activities = [
    { id: 1, name: "Culto Dominical", date: "2024-01-21", time: "19:00" },
    { id: 2, name: "Reunião de Oração", date: "2024-01-17", time: "19:30" },
    { id: 3, name: "Escola Bíblica", date: "2024-01-21", time: "09:00" },
  ];

  const members = [
    { id: 1, name: "João Silva", present: true },
    { id: 2, name: "Maria Santos", present: false },
    { id: 3, name: "Pedro Oliveira", present: true },
    { id: 4, name: "Ana Costa", present: true },
    { id: 5, name: "Carlos Ferreira", present: false },
  ];

  const attendanceRecords = [
    {
      activity: "Culto Dominical",
      date: "2024-01-14",
      totalMembers: 342,
      present: 285,
      percentage: 83
    },
    {
      activity: "Reunião de Oração",
      date: "2024-01-10",
      totalMembers: 342,
      present: 45,
      percentage: 13
    },
    {
      activity: "Escola Bíblica",
      date: "2024-01-14",
      totalMembers: 342,
      present: 120,
      percentage: 35
    }
  ];

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 70) return "bg-green-100 text-green-800";
    if (percentage >= 40) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Lista de Presença</h1>
        <p className="text-gray-600 mt-2">Controle de presença em atividades da igreja</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckSquare className="w-5 h-5 mr-2" />
              Registrar Presença
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecionar Atividade
              </label>
              <Select value={selectedActivity} onValueChange={setSelectedActivity}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha uma atividade" />
                </SelectTrigger>
                <SelectContent>
                  {activities.map((activity) => (
                    <SelectItem key={activity.id} value={activity.id.toString()}>
                      {activity.name} - {activity.date} às {activity.time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedActivity && (
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">Lista de Membros</h3>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                      <Checkbox 
                        id={`member-${member.id}`}
                        defaultChecked={member.present}
                      />
                      <label 
                        htmlFor={`member-${member.id}`}
                        className="text-sm font-medium text-gray-700 cursor-pointer flex-1"
                      >
                        {member.name}
                      </label>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Salvar Presença
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Histórico de Presença
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceRecords.map((record, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{record.activity}</h3>
                      <p className="text-sm text-gray-500">{record.date}</p>
                    </div>
                    <Badge className={getPercentageColor(record.percentage)}>
                      {record.percentage}%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {record.present} de {record.totalMembers} presentes
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${record.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
