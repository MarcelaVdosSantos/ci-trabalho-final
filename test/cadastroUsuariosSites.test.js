import { fazerLogin } from "../src/cadastroUsuariosSites.js";
import assert from "node:assert";

//Testes:
//Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

describe("Testes do login do usuário", function () {
  // Teste de login realizado com sucesso
  it("Validar o login do usuário com e-mail, senha e credencial válidos", function () {
    //Arrange (o que precisa para testar)
    const emailUsuarioQueQueroTestar = "ana.silva@gmail.com";
    const senhaUsuarioQueQueroTestar = "senhaDaAna123@";
    const mensagemQueQueroValidar = "O login foi realizado com sucesso.";

    // Act (ação a ser executada)
    const retornoDaFuncao = fazerLogin(
      emailUsuarioQueQueroTestar,
      senhaUsuarioQueQueroTestar,
    );

    //Assert (validação)
    assert.equal(retornoDaFuncao, mensagemQueQueroValidar);
  });

  // Teste da credencial expirada
  it("Validar que usuário e senha válidos, mas com credencial expirada não realiza o login", function () {
    // Act
    const emailUsuarioQueQueroTestar = "carlinhos.silveira@gmail.com";
    const senhaUsuarioQueQueroTestar = "senhaDatarde1234@";

    // Assert

    assert.throws(
      function () {
        fazerLogin(emailUsuarioQueQueroTestar, senhaUsuarioQueQueroTestar);
      },
      { message: "Renove suas credenciais." },
    );
  });

  // Teste do usuário não encontrado
  it("Validar que usuário com e-mail não cadastrado não realiza o login", function () {
    // Act
    const emailUsuarioQueQueroTestar = "marcela.dossantos@gmail.com";
    const senhaUsuarioQueQueroTestar = "senhaDatarde1234@";

    // Assert

    assert.throws(
      function () {
        fazerLogin(emailUsuarioQueQueroTestar, senhaUsuarioQueQueroTestar);
      },
      { message: "O e-mail informado não esta cadastrado." },
    );
  });

  // Teste do usuário válido e senha incorreta
  it("Validar que usuário válido e senha inválida não realiza o login", function () {
    // Act
    const emailUsuarioQueQueroTestar = "andreluizsoares@gmail.com";
    const senhaUsuarioQueQueroTestar = "senhafacildelembra";

    // Assert

    assert.throws(
      function () {
        fazerLogin(emailUsuarioQueQueroTestar, senhaUsuarioQueQueroTestar);
      },
      { message: "A senha esta diferente da cadastrada." },
    );
  });
});
