
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, TrendingUp, TrendingDown } from "lucide-react";

export const FinanceModule = () => {
  const [showForm, setShowForm] = useState(false);
  const [transactionType, setTransactionType] = useState("entrada");

  const transactions = [
    { id: 1, type: "entrada", category: "Dízimo", amount: 1500, description: "Dízimo Janeiro", date: "2024-01-15" },
    { id: 2, type: "entrada", category: "Oferta", amount: 800, description: "Oferta Especial", date: "2024-01-14" },
    { id: 3, type: "saida", category: "Manutenção", amount: 350, description: "Reparo do som", date: "2024-01-12" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão Financeira</h1>
          <p className="text-gray-600 mt-2">Controle de entradas e saídas da igreja</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Nova Transação
        </Button>
      </div>

      {showForm && (
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
                        <SelectItem value="dizimo">Dízimo</SelectItem>
                        <SelectItem value="oferta">Oferta</SelectItem>
                        <SelectItem value="doacao">Doação</SelectItem>
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
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
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
                    <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
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
    </div>
  );
};
