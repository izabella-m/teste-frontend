// document.addEventListener("DOMContentLoaded", function () {

//   const data = localStorage.getItem("pesquisaAtual");
//   if (!data) return; // nada salvo

//   const pesquisa = JSON.parse(data);

//   document.getElementById("PesquisaNome").value = pesquisa.nome;
//   document.getElementById("PesquisaDescricao").value = pesquisa.descricao;
//   document.getElementById("PesquisaDataDisponivel").value = pesquisa.dataInicio;
//   document.getElementById("PesquisaDataTermino").value = pesquisa.dataFim;

//   // Radios
//   document.querySelector(`input[name="data[Pesquisa][enviar_para]"][value="${pesquisa.enviarPara}"]`).checked = true;

//   // Checkbox
//   document.getElementById("PesquisaAtivo").checked = pesquisa.ativo;
// });

// document.querySelector(".classicRedButton").addEventListener("click", function (e) {
//   e.preventDefault();

//   const pesquisa = {
//     nome: document.getElementById("PesquisaNome").value,
//     descricao: document.getElementById("PesquisaDescricao").value,
//     dataInicio: document.getElementById("PesquisaDataDisponivel").value,
//     dataFim: document.getElementById("PesquisaDataTermino").value,
//     enviarPara: document.querySelector('input[name="data[Pesquisa][enviar_para]"]:checked').value,
//     ativo: document.getElementById("PesquisaAtivo").checked
//   };

//   localStorage.setItem("pesquisaAtual", JSON.stringify(pesquisa));

//   alert("Pesquisa atualizada!");
// });

console.log("Editar pesquisa — script carregado");

const dados = localStorage.getItem("pesquisaAtual");

if (!dados) {
  console.error("Nenhuma pesquisa salva!");
} else {

  const pesquisa = JSON.parse(dados);
  console.log("Pesquisa carregada:", pesquisa);

  // Preenche os campos
  document.getElementById("PesquisaNome").value = pesquisa.nome;
  document.getElementById("PesquisaDescricao").value = pesquisa.descricao;
  document.getElementById("PesquisaDataInicio").value = pesquisa.dataInicio;
  document.getElementById("PesquisaDataTermino").value = pesquisa.dataFim;

  document.getElementById("PesquisaAtivo").checked = pesquisa.ativo;

  // Radio
  const radio = document.querySelector(`input[name="data[Pesquisa][enviar_para]"][value="${pesquisa.enviarPara}"]`);
  if (radio) radio.checked = true;
}
