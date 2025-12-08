// console.log('aqui')

// document.querySelector(".classicRedButton").addEventListener("click", function (e) {
//   e.preventDefault();

//   const pesquisa = {
//     nome: document.getElementById("PesquisaNome").value,
//     descricao: document.getElementById("PesquisaDescricao").value,
//     dataInicio: document.getElementById("PesquisaDataInicio").value,
//     dataFim: document.getElementById("PesquisaDataTermino").value,
//     enviarPara: document.querySelector('input[name="data[Pesquisa][enviar_para]"]:checked').value,
//     ativo: document.getElementById("PesquisaAtivo").checked
//   };

//   localStorage.setItem("pesquisaAtual", JSON.stringify(pesquisa));

//   window.location.href = "editar-pesquisa.html";
// });
console.log("Script carregado");

const botao = document.querySelector(".classicRedButton");

if (!botao) {
  console.error("ERRO: .classicRedButton não foi encontrado no DOM!");
}

botao.addEventListener("click", function (e) {
  e.preventDefault();

  const enviar = document.querySelector('input[name="data[Pesquisa][enviar_para]"]:checked');

  if (!enviar) {
    console.error("Nenhuma opção 'Enviar para' selecionada!");
    return;
  }

  const pesquisa = {
    nome: document.getElementById("PesquisaNome").value,
    descricao: document.getElementById("PesquisaDescricao").value,
    dataInicio: document.getElementById("PesquisaDataInicio").value,
    dataFim: document.getElementById("PesquisaDataTermino").value,
    enviarPara: enviar.value, // 0 ou 1
    ativo: document.getElementById("PesquisaAtivo").checked
  };

  console.log("OBJETO FINAL:", pesquisa);

  localStorage.setItem("pesquisaAtual", JSON.stringify(pesquisa));

  window.location.href = "pesquisa-geral.html";
});
