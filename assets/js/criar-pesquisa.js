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
console.log("Botão encontrado?", botao);

if (!botao) {
  console.error("ERRO: .classicRedButton não foi encontrado no DOM!");
}

botao.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("Botão clicado!");

  // Log individual de cada campo
  let nome = document.getElementById("PesquisaNome");
  let descricao = document.getElementById("PesquisaDescricao");
  let inicio = document.getElementById("PesquisaDataInicio");
  let termino = document.getElementById("PesquisaDataTermino");
  let enviar = document.querySelector('input[name="data[Pesquisa][enviar_para]"]:checked');
  let ativo = document.getElementById("PesquisaAtivo");

  console.log("Nome:", nome);
  console.log("Descricao:", descricao);
  console.log("Data Início:", inicio);
  console.log("Data Término:", termino);
  console.log("Enviar Para:", enviar);
  console.log("Ativo:", ativo);

  // criar validacao
  // if (!nome || !descricao || !inicio || !termino || !enviar || !ativo) {
  //   console.error("objeto null");
  //   return;
  // }

  // Criação do objeto
  const pesquisa = {
    nome: nome.value,
    descricao: descricao.value,
    dataInicio: inicio.value,
    dataFim: termino.value,
    enviarPara: enviar.value,
    ativo: ativo.checked
  };

  console.log("OBJETO FINAL:", pesquisa);

  localStorage.setItem("pesquisaAtual", JSON.stringify(pesquisa));

  window.location.href = "pesquisa-geral.html";
});
