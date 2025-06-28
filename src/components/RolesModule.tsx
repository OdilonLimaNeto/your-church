
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Shield, Users, Settings } from "lucide-react";

export const RolesModule = () => {
  const [showForm, setShowForm] = useState(false);

  const roles = [
    {
      id: 1,
      name: "Pastor",
      description: "Liderança espiritual completa da igreja",
      permissions: ["Gestão Completa", "Finanças", "Membros", "Atividades"],
      memberCount: 2,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 2,
      name: "Diácono",
      description: "Auxiliar na administração e cuidado dos membros",
      permissions: ["Membros", "Atividades", "Presença"],
      memberCount: 8,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      name: "Tesoureiro",
      description: "Responsável pela gestão financeira",
      permissions: ["Finanças", "Relatórios"],
      memberCount: 1,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      name: "Secretário",
      description: "Gestão de atividades e registros",
      permissions: ["Atividades", "Presença", "Relatórios"],
      memberCount: 2,
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const availablePermissions = [
    { id: "gestao_completa", name: "Gestão Completa", description: "Acesso total ao sistema" },
    { id: "financas", name: "Finanças", description: "Gestão de entradas e saídas" },
    { id: "membros", name: "Membros", description: "Cadastro e gestão de membros" },
    { id: "atividades", name: "Atividades", description: "Criação e gestão de eventos" },
    { id: "presenca", name: "Presença", description: "Controle de presença" },
    { id: "relatorios", name: "Relatórios", description: "Visualização de relatórios" },
    { id: "cargos", name: "Cargos", description: "Gestão de cargos e permissões" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão de Cargos</h1>
          <p className="text-gray-600 mt-2">Controle de cargos e permissões do sistema</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Novo Cargo
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Novo Cargo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="roleName">Nome do Cargo</Label>
              <Input id="roleName" placeholder="Ex: Líder de Louvor" />
            </div>
            <div>
              <Label htmlFor="roleDescription">Descrição</Label>
              <Textarea id="roleDescription" placeholder="Descreva as responsabilidades do cargo" />
            </div>
            <div>
              <Label>Permissões</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                {availablePermissions.map((permission) => (
                  <div key={permission.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <Checkbox id={permission.id} />
                    <div className="flex-1">
                      <label 
                        htmlFor={permission.id}
                        className="text-sm font-medium text-gray-700 cursor-pointer"
                      >
                        {permission.name}
                      </label>
                      <p className="text-xs text-gray-500 mt-1">{permission.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="bg-green-600 hover:bg-green-700">Salvar</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <Card key={role.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <div>
                    <CardTitle className="text-lg">{role.name}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                  </div>
                </div>
                <Badge className={role.color}>
                  <Users className="w-3 h-3 mr-1" />
                  {role.memberCount}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Permissões</h4>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permission, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {permission}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Settings className="w-4 h-4 mr-1" />
                  Editar
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Users className="w-4 h-4 mr-1" />
                  Ver Membros
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
