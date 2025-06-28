
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Users, Phone, Mail, User } from "lucide-react";

export const MembersModule = () => {
  const [showForm, setShowForm] = useState(false);

  const members = [
    {
      id: 1,
      name: "João Silva",
      email: "joao.silva@email.com",
      phone: "(11) 99999-9999",
      status: "Ativo",
      role: "Pastor",
      joinDate: "2020-01-15"
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria.santos@email.com",
      phone: "(11) 88888-8888",
      status: "Ativo",
      role: "Diácono",
      joinDate: "2021-03-20"
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      email: "pedro.oliveira@email.com",
      phone: "(11) 77777-7777",
      status: "Ativo",
      role: "Membro",
      joinDate: "2022-07-10"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-green-100 text-green-800";
      case "Inativo":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Pastor":
        return "bg-purple-100 text-purple-800";
      case "Diácono":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão de Membros</h1>
          <p className="text-gray-600 mt-2">Cadastro e controle de membros da igreja</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Novo Membro
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Novo Membro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Nome do membro" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="email@exemplo.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="(11) 99999-9999" />
              </div>
              <div>
                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input id="birthDate" type="date" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ativo">Ativo</SelectItem>
                    <SelectItem value="inativo">Inativo</SelectItem>
                    <SelectItem value="visitante">Visitante</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="role">Cargo</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="membro">Membro</SelectItem>
                    <SelectItem value="diacono">Diácono</SelectItem>
                    <SelectItem value="presbitero">Presbítero</SelectItem>
                    <SelectItem value="pastor">Pastor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" placeholder="Endereço completo" />
            </div>
            <div className="flex gap-2">
              <Button className="bg-green-600 hover:bg-green-700">Salvar</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Lista de Membros
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {members.map((member) => (
              <div key={member.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{member.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          {member.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          {member.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(member.status)}>
                      {member.status}
                    </Badge>
                    <Badge className={getRoleColor(member.role)}>
                      {member.role}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
