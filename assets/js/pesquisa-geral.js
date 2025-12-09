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
      <span class="green action-edit">
        <img src="assets/icons/Pen-line.svg" style="cursor: pointer; width: 18px; height: 18px; color: #4A4A4A;"/>
      </span>
      &nbsp;
      <span class="red action-delete">
        <img src="assets/icons/trashIcon.svg" style="cursor: pointer; width: 18px; height: 18px; color: #4A4A4A; margin-right: 15px;"/>
      </span>
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

tbody.addEventListener("click", function (event) {
  const botaoDelete = event.target.closest(".action-delete");

  if (botaoDelete) {
    const tr = botaoDelete.closest("tr");
    if (tr) tr.remove();
  }
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
const dataSpan = document.getElementById("dataPesquisa");
if (dataSpan) {
  dataSpan.textContent = pesquisa.dataFim || "--";
}

// Preencher envio
const enviarSpan = document.getElementById("textoEnviarPara");
if (enviarSpan) {
  enviarSpan.textContent =
    pesquisa.enviarPara === "1"
      ? "Só participantes credenciados"
      : "Todos confirmados";
}


  // Disponibilidade
  const tagDisp = document.querySelector(".availability-tag");
  const tagIndisp = document.querySelector(".availability-tag-unavailable");
  
  if (pesquisa.ativo) {

    tagDisp.style.display = "flex";
    tagIndisp.style.display = "none";
  } else {

    tagDisp.style.display = "none";
    tagIndisp.style.display = "flex";
  }
  
}
