
nome = prompt("Qual o seu nome?");
hora = new Date().getHours();

if(nome == null || nome == "" || nome == " ")
nome = "Usuário";

function bemVindo() {
    if (hora < 12) {
        document.writeln("<h3>bom dia, " + nome + "!</h3>");
    } else if (hora < 18) {
        document.writeln("<h3>boa tarde, " + nome + "!</h3>");
    } else {
        document.writeln("<h3>boa noite, " + nome + "!</h3>");
    }
}

function validar() {
    var inputNome = document.querySelector('.nome');
    var inputSenha = document.querySelector('.senha');
    var inputSenhaRep = document.querySelector('.senhaRep');
  
    if (
      inputNome.value.length == 0 &&
      inputSenha.value.length == 0 &&
      inputSenhaRep.value.length == 0
    ) {
      alert('Preencha os campos');
      return false;
    }
  
    if (inputSenha.value.length < 6) {
      alert('Digite uma senha com mais de 6 digitos');
      inputSenha.focus();
      return false;
    }
    if (inputSenhaRep.value.length < 6) {
      alert('Repita a Senha');
      inputSenhaRep.focus();
      return false;
    }
    if (inputSenha.value != inputSenhaRep.value) {
      alert('As Senhas não são iguais');
      inputSenha.focus();
      return false;
    }
    alert("Cadastro realizado com Sucesso!")

}