
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Calendar, Clock, MapPin } from "lucide-react";

export const ActivitiesModule = () => {
  const [showForm, setShowForm] = useState(false);

  const activities = [
    {
      id: 1,
      title: "Culto Dominical",
      category: "Culto",
      date: "2024-01-21",
      time: "19:00",
      location: "Santuário Principal",
      description: "Culto dominical com pregação e louvor"
    },
    {
      id: 2,
      title: "Reunião de Oração",
      category: "Oração",
      date: "2024-01-17",
      time: "19:30",
      location: "Sala de Oração",
      description: "Momento de oração e intercessão"
    },
    {
      id: 3,
      title: "Escola Bíblica Dominical",
      category: "Ensino",
      date: "2024-01-21",
      time: "09:00",
      location: "Salas de Aula",
      description: "Classes de estudo bíblico por faixa etária"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão de Atividades</h1>
          <p className="text-gray-600 mt-2">Organize e gerencie eventos da igreja</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Nova Atividade
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Nova Atividade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Título da Atividade</Label>
              <Input id="title" placeholder="Nome da atividade" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Categoria</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="culto">Culto</SelectItem>
                    <SelectItem value="oracao">Oração</SelectItem>
                    <SelectItem value="ensino">Ensino</SelectItem>
                    <SelectItem value="evento">Evento Especial</SelectItem>
                    <SelectItem value="reuniao">Reunião</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Local</Label>
                <Input id="location" placeholder="Local do evento" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Data</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="time">Horário</Label>
                <Input id="time" type="time" />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea id="description" placeholder="Descreva a atividade" />
            </div>
            <div className="flex gap-2">
              <Button className="bg-green-600 hover:bg-green-700">Salvar</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <Card key={activity.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{activity.title}</CardTitle>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {activity.category}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{activity.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{activity.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{activity.location}</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">{activity.description}</p>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Editar Atividade
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
