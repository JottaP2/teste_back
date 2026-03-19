
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { pegarContatos } from "../server/action";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // 2. Chame a função diretamente (executa no servidor)
  const result = await pegarContatos();
  
  if (!result.success) {
    return <div className="p-8 text-red-500">{result.error}</div>;
  }

  const contatos = result.data || [];

  return (
    <div className="p-8 bg-zinc-950 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Lista de Pedidos/Contatos</h1>
      
      <div className="overflow-x-auto shadow-xl rounded-lg border border-zinc-800">
        <table className="min-w-full bg-zinc-900">
          <thead>
            <tr className="bg-zinc-800 text-gray-300">
              <th className="p-4 text-left">Nome</th>
              <th className="p-4 text-left">E-mail</th>
              <th className="p-4 text-left">Telefone</th>
              <th className="p-4 text-left">Assunto</th>
              <th className="p-4 text-left">Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato) => (
              <tr key={contato.id} className="border-t border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <td className="p-4">{contato.name}</td>
                <td className="p-4 text-gray-400">{contato.email}</td>
                <td className="p-4 text-gray-400">{contato.telephone}</td>
                <td className="p-4 text-sm font-mono text-red-400">
                  {JSON.stringify(contato.subject)}
                </td>
                <td className="p-4 italic text-gray-300">"{contato.message}"</td>
              </tr>
            ))}
            {contatos.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">Nenhuma mensagem encontrada.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
