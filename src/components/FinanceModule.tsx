
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, TrendingUp, TrendingDown, User, Calendar } from "lucide-react";

export const FinanceModule = () => {
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [showTitheForm, setShowTitheForm] = useState(false);
  const [showRevenueForm, setShowRevenueForm] = useState(false);
  const [transactionType, setTransactionType] = useState("entrada");
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");

  // Mock data para membros
  const members = [
    { id: 1, name: "João Silva" },
    { id: 2, name: "Maria Santos" },
    { id: 3, name: "Pedro Oliveira" },
  ];

  // Mock data para atividades
  const activities = [
    { id: 1, title: "Culto Dominical", date: "2024-01-21" },
    { id: 2, title: "Reunião de Oração", date: "2024-01-17" },
    { id: 3, title: "Escola Bíblica Dominical", date: "2024-01-21" },
  ];

  // Mock data para dízimos
  const tithes = [
    { id: 1, memberId: 1, memberName: "João Silva", amount: 500, month: "2024-01", date: "2024-01-15" },
    { id: 2, memberId: 2, memberName: "Maria Santos", amount: 300, month: "2024-01", date: "2024-01-14" },
    { id: 3, memberId: 1, memberName: "João Silva", amount: 500, month: "2023-12", date: "2023-12-15" },
  ];

  // Mock data para arrecadação por atividade
  const activityRevenues = [
    { id: 1, activityId: 1, activityTitle: "Culto Dominical", amount: 800, date: "2024-01-21" },
    { id: 2, activityId: 2, activityTitle: "Reunião de Oração", amount: 200, date: "2024-01-17" },
  ];

  const transactions = [
    { id: 1, type: "entrada", category: "Dízimo", amount: 1500, description: "Dízimos Janeiro 2024", date: "2024-01-31", period: "01/01/2024 - 31/01/2024" },
    { id: 2, type: "entrada", category: "Oferta", amount: 800, description: "Ofertas Janeiro 2024", date: "2024-01-31", period: "01/01/2024 - 31/01/2024" },
    { id: 3, type: "saida", category: "Manutenção", amount: 350, description: "Reparo do som", date: "2024-01-12", period: "01/01/2024 - 31/01/2024" },
  ];

  const getMemberTithesReport = (memberId: number) => {
    return tithes.filter(tithe => tithe.memberId === memberId).slice(0, 12);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão Financeira</h1>
          <p className="text-gray-600 mt-2">Controle de dízimos, ofertas e finanças da igreja</p>
        </div>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="tithes">Dízimos</TabsTrigger>
          <TabsTrigger value="activities">Arrecadação</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <div className="flex justify-end">
            <Button onClick={() => setShowTransactionForm(!showTransactionForm)} className="bg-blue-600 hover:bg-blue-700">
              <PlusCircle className="w-4 h-4 mr-2" />
              Nova Transação
            </Button>
          </div>

          {showTransactionForm && (
            <Card>
              <CardHeader>
                <CardTitle>Nova Transação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Tipo</Label>
                    <Select value={transactionType} onValueChange={setTransactionType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entrada">Entrada</SelectItem>
                        <SelectItem value="saida">Saída</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="category">Categoria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {transactionType === "entrada" ? (
                          <>
                            <SelectItem value="oferta">Oferta</SelectItem>
                            <SelectItem value="doacao">Doação</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </>
                        ) : (
                          <>
                            <SelectItem value="manutencao">Manutenção</SelectItem>
                            <SelectItem value="combustivel">Combustível</SelectItem>
                            <SelectItem value="material">Material</SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Valor (R$)</Label>
                    <Input id="amount" type="number" placeholder="0,00" />
                  </div>
                  <div>
                    <Label htmlFor="date">Data</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Descrição</Label>
                  <Input id="description" placeholder="Descreva a transação" />
                </div>
                <div className="flex gap-2">
                  <Button className="bg-green-600 hover:bg-green-700">Salvar</Button>
                  <Button variant="outline" onClick={() => setShowTransactionForm(false)}>Cancelar</Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {transaction.type === "entrada" ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-600" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{transaction.category} • {transaction.period}</p>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.type === "entrada" ? "text-green-600" : "text-red-600"
                    }`}>
                      {transaction.type === "entrada" ? "+" : "-"}R$ {transaction.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tithes" className="space-y-4">
          <div className="flex justify-end">
            <Button onClick={() => setShowTitheForm(!showTitheForm)} className="bg-green-600 hover:bg-green-700">
              <PlusCircle className="w-4 h-4 mr-2" />
              Registrar Dízimo
            </Button>
          </div>

          {showTitheForm && (
            <Card>
              <CardHeader>
                <CardTitle>Registrar Dízimo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="member">Membro</Label>
                    <Select value={selectedMember} onValueChange={setSelectedMember}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o membro" />
                      </SelectTrigger>
                      <SelectContent>
                        {members.map((member) => (
                          <SelectItem key={member.id} value={member.id.toString()}>
                            {member.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="titheAmount">Valor (R$)</Label>
                    <Input id="titheAmount" type="number" placeholder="0,00" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="titheMonth">Mês de Referência</Label>
                    <Input id="titheMonth" type="month" />
                  </div>
                  <div>
                    <Label htmlFor="titheDate">Data do Pagamento</Label>
                    <Input id="titheDate" type="date" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-green-600 hover:bg-green-700">Salvar</Button>
                  <Button variant="outline" onClick={() => setShowTitheForm(false)}>Cancelar</Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Dízimos Registrados</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Membro</TableHead>
                    <TableHead>Mês</TableHead>
                    <TableHead>Data Pagamento</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tithes.map((tithe) => (
                    <TableRow key={tithe.id}>
                      <TableCell className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        {tithe.memberName}
                      </TableCell>
                      <TableCell>{tithe.month}</TableCell>
                      <TableCell>{tithe.date}</TableCell>
                      <TableCell className="text-right font-semibold text-green-600">
                        R$ {tithe.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <div className="flex justify-end">
            <Button onClick={() => setShowRevenueForm(!showRevenueForm)} className="bg-purple-600 hover:bg-purple-700">
              <PlusCircle className="w-4 h-4 mr-2" />
              Registrar Arrecadação
            </Button>
          </div>

          {showRevenueForm && (
            <Card>
              <CardHeader>
                <CardTitle>Registrar Arrecadação de Atividade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="activity">Atividade</Label>
                    <Select value={selectedActivity} onValueChange={setSelectedActivity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a atividade" />
                      </SelectTrigger>
                      <SelectContent>
                        {activities.map((activity) => (
                          <SelectItem key={activity.id} value={activity.id.toString()}>
                            {activity.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="revenueAmount">Valor Arrecadado (R$)</Label>
                    <Input id="revenueAmount" type="number" placeholder="0,00" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="revenueDate">Data da Arrecadação</Label>
                  <Input id="revenueDate" type="date" />
                </div>
                <div className="flex gap-2">
                  <Button className="bg-green-600 hover:bg-green-700">Salvar</Button>
                  <Button variant="outline" onClick={() => setShowRevenueForm(false)}>Cancelar</Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Arrecadação por Atividade</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Atividade</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Valor Arrecadado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activityRevenues.map((revenue) => (
                    <TableRow key={revenue.id}>
                      <TableCell className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {revenue.activityTitle}
                      </TableCell>
                      <TableCell>{revenue.date}</TableCell>
                      <TableCell className="text-right font-semibold text-green-600">
                        R$ {revenue.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatório de Dízimos por Membro</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {members.map((member) => {
                  const memberTithes = getMemberTithesReport(member.id);
                  const totalAmount = memberTithes.reduce((sum, tithe) => sum + tithe.amount, 0);
                  
                  return (
                    <div key={member.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold flex items-center">
                          <User className="w-5 h-5 mr-2" />
                          {member.name}
                        </h3>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Total dos últimos 12 meses</p>
                          <p className="text-xl font-bold text-green-600">R$ {totalAmount.toFixed(2)}</p>
                        </div>
                      </div>
                      
                      {memberTithes.length > 0 ? (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Mês</TableHead>
                              <TableHead>Data Pagamento</TableHead>
                              <TableHead className="text-right">Valor</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {memberTithes.map((tithe) => (
                              <TableRow key={tithe.id}>
                                <TableCell>{tithe.month}</TableCell>
                                <TableCell>{tithe.date}</TableCell>
                                <TableCell className="text-right font-semibold">
                                  R$ {tithe.amount.toFixed(2)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      ) : (
                        <p className="text-gray-500 text-center py-4">Nenhum dízimo registrado</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
