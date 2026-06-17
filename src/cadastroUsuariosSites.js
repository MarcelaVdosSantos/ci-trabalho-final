/*
Desafio Valendo 2 Pontos na Nota Final
Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, 
senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.
Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login 
foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer 
que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão 
incorretas caso o email não exista ou a senha esteja incorreta para aquele email.
Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.
Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais
Entrega:
Suba seu código no Github e entregue o link via plataforma do PGATS até o dia 10 de maio às 23:59:59.
*/

// Declaração do vetor com 4 usuários, onde 2 estão ok e 2 estão expirados

const usuarios = [
  {
    id: "1",
    nome: "Ana Silva",
    email: "ana.silva@gmail.com",
    senha: "senhaDaAna123@",
    expirado: false,
  },

  {
    id: "2",
    nome: "Andre Luiz Soares",
    email: "andreluizsoares@gmail.com",
    senha: "senhafacildelembra01@",
    expirado: false,
  },

  {
    id: "3",
    nome: "Carlos Silveira",
    email: "carlinhos.silveira@gmail.com",
    senha: "senhaDatarde1234@",
    expirado: true,
  },

  {
    id: "4",
    nome: "Maria Alves",
    email: "alvesmaria@gmail.com",
    senha: "senha123@",
    expirado: true,
  },
];

// função de login
export function fazerLogin(emailUsuario, senhaUsuario) {
  // criação da função com export, ela receberá 2 parâmetros e-mail e senha do usuário

  // for é utilizado para que seja possível percorrer todo o vetor
  for (let i = 0; i < usuarios.length; i++) {
    // filtro para verificar se o e-mail é válido
    if (usuarios[i].email === emailUsuario) {
      // filtro para verificar se a senha é válida
      if (usuarios[i].senha === senhaUsuario) {
        if (usuarios[i].expirado === true) {
          // mensagem de retorno de credencial expirada
          throw new Error("Renove suas credenciais."); // filtro para verificar a validade da credencial
        }
        return "O login foi realizado com sucesso.";
      } else {
        throw new Error("A senha esta diferente da cadastrada."); // mensagem de retorno de senha inválida
      }
    }
  }
  throw new Error("O e-mail informado não esta cadastrado.");
}
