'use server'; 

import { prisma } from '@/lib/prisma';

export async function salvarContato(selectedSubjects: string[], _prevState: unknown, formData: FormData) {
  const name = formData.get('nome') as string;
  const email = formData.get('email') as string;
  const message = formData.get('mensagem') as string;
  const enterprise = formData.get('empresa') as string;
  const telephone = formData.get('telefone') as string;
  const subject = selectedSubjects.join(', ');

  try {
    // Ensure ContactForms table exists
    try {
      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS "ContactForms" (
          "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
          "name" text NOT NULL,
          "email" text NOT NULL,
          "telephone" text NOT NULL,
          "enterprise" text NOT NULL,
          "subject" text NOT NULL,
          "message" text NOT NULL
        )
      `);
    } catch (error) {
      console.log("ContactForms table already exists or error creating it:", error);
    }

    await prisma.contactForms.create({
      data: { name, email, message, enterprise, subject, telephone },
    });

    console.log("Mensagem salva com sucesso!");
    return { success: true };
  } catch (error: unknown) {
    console.error("Erro ao salvar contato:", error);
    
    // Fallback para restrições de banco de dados
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2002') {
      return { success: false, error: "Este email ou telefone já foi cadastrado." };
    }
    
    return { success: false, error: "Ocorreu um erro ao salvar sua mensagem. Tente novamente mais tarde." };
  }
}


export async function pegarContatos() {

  try {
    const contatos = await prisma.contactForms.findMany();
    console.log("Mensagens salvas com sucesso!");
    return { success: true, data: contatos};

  } catch (error: unknown) {
    console.error("Erro ao retornar contatos:", error);
    return { success: false, error: "Ocorreu um erro ao retornar as mensagens. Tente novamente mais tarde." };
  }
}

