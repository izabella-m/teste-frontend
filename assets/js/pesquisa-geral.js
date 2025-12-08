const addBtn = document.getElementById("add-question-btn");
const form = document.getElementById("question-form");
const cancelBtn = document.getElementById("cancel-btn");
const confirmBtn = document.getElementById("confirm-btn");
const input = document.getElementById("question-input");
const checkbox = document.getElementById("checkbox-obrigatorio");
const tbody = document.getElementById("questions-body");

const perguntas = [
  { id: 1, texto: "Como você avaliaria sua experiência geral no evento?" },
  { id: 2, texto: "O conteúdo apresentado foi relevante para você?", cinza: true },
  { id: 3, texto: 'A qualidade dos palestrantes foi satisfatória? <span class="obrigatorio">*</span>' },
  { id: 4, texto: "Como você avalia a organização do evento?", cinza: true },
  { id: 5, texto: "Pergunta exemplo" }
];

function renderPergunta(texto) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td data-th="Nome">${texto}</td>

    <td data-th="Ações" class="acoes">
      <span class="green action-edit">Editar</span>
      &nbsp;
      <span class="red action-delete">Excluir</span>
    </td>
  `;

  tbody.appendChild(tr);
}

perguntas.forEach(p => renderPergunta(p.texto));


addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addBtn.style.display = "none";
  form.style.display = "block"; 
});


cancelBtn.addEventListener("click", function () {
  form.style.display = "none"; 
  addBtn.style.display = "block";
  input.value = "";
  checkbox.checked = false;
});


confirmBtn.addEventListener("click", function () {
  const textoPergunta = input.value.trim();

  if (textoPergunta === "") return;

  const textoFinal = checkbox.checked
    ? `${textoPergunta} <span class="obrigatorio">*</span>`
    : textoPergunta;

  renderPergunta(textoFinal);

  input.value = "";
  checkbox.checked = false;

  form.style.display = "none";
  addBtn.style.display = "block";
});

console.log("Carregando dados da pesquisa...");

const dados = localStorage.getItem("pesquisaAtual");

if (!dados) {
  console.error("Nenhuma pesquisa encontrada no localStorage!");
} else {
  const pesquisa = JSON.parse(dados);
  console.log("Dados recebidos:", pesquisa);

  // Nome da pesquisa
  document.querySelector(".head-card h3").textContent = pesquisa.nome;

  // Preencher data
  const dataSpan = document.querySelector(
    ".info-section .info-box:nth-child(1) .emphasis"
  );
  if (dataSpan) dataSpan.textContent = pesquisa.dataFim || "--";

  // Preencher envio
  const enviarSpan = document.querySelector(
    ".info-section .info-box:nth-child(2) .emphasis"
  );
  if (enviarSpan) {
    enviarSpan.textContent =
      pesquisa.enviarPara === "1"
        ? "Só participantes credenciados"
        : "Todos confirmados";
  }

  // Disponibilidade
  const disponibilidadeTexto = document.querySelector(
    ".availability-tag p"
  );
  const circulo = document.querySelector(".cirlce-availability");

  if (pesquisa.ativo) {
    disponibilidadeTexto.textContent = "Disponível";
    circulo.style.background = "#00C851";
  } else {
    disponibilidadeTexto.textContent = "Indisponível";
    circulo.style.background = "#FF4444";
  }
}
