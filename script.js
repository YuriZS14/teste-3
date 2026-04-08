// ================= DADOS =================

// FARMÁCIAS
const farmacias = [
    { nome: "Farmácia Central", cidade: "Aparecida", endereco: "Centro, 100" },
    { nome: "Drogaria Saúde", cidade: "Arapeí", endereco: "Rua Principal, 50" },
    { nome: "Farmácia Popular", cidade: "Areias", endereco: "Av. Brasil, 200" },
    { nome: "Drogaria do Povo", cidade: "Bananal", endereco: "Rua das Flores, 80" },
    { nome: "Farmácia Vida", cidade: "Caçapava", endereco: "Centro, 120" },
    { nome: "Drogaria Central", cidade: "Cachoeira Paulista", endereco: "Av. Central, 90" },
    { nome: "Farmácia Montanha", cidade: "Campos do Jordão", endereco: "Capivari, 300" },
    { nome: "Farmácia Saúde", cidade: "Canas", endereco: "Rua A, 10" },
    { nome: "Drogaria Litoral", cidade: "Caraguatatuba", endereco: "Av. Praia, 500" },
    { nome: "Farmácia Cruzeiro", cidade: "Cruzeiro", endereco: "Centro, 140" },
    { nome: "Drogaria Serra", cidade: "Cunha", endereco: "Rua B, 70" },
    { nome: "Farmácia Popular", cidade: "Guaratinguetá", endereco: "Av. JK, 210" },
    { nome: "Farmácia Vale", cidade: "Igaratá", endereco: "Centro, 60" },
    { nome: "Drogaria Ilha", cidade: "Ilhabela", endereco: "Av. Mar, 400" },
    { nome: "Farmácia Jacareí", cidade: "Jacareí", endereco: "Centro, 150" },
    { nome: "Farmácia Saúde", cidade: "Jambeiro", endereco: "Rua Principal, 30" },
    { nome: "Drogaria Lagoinha", cidade: "Lagoinha", endereco: "Centro, 20" },
    { nome: "Farmácia Lavrinhas", cidade: "Lavrinhas", endereco: "Rua A, 25" },
    { nome: "Farmácia Lorena", cidade: "Lorena", endereco: "Av. Peixoto, 220" },
    { nome: "Drogaria Lobato", cidade: "Monteiro Lobato", endereco: "Centro, 15" },
    { nome: "Farmácia Serra", cidade: "Natividade da Serra", endereco: "Rua B, 40" },
    { nome: "Farmácia Paraibuna", cidade: "Paraibuna", endereco: "Centro, 55" },
    { nome: "Drogaria Pinda", cidade: "Pindamonhangaba", endereco: "Av. Central, 180" },
    { nome: "Farmácia Piquete", cidade: "Piquete", endereco: "Rua C, 35" },
    { nome: "Farmácia Potim", cidade: "Potim", endereco: "Centro, 45" },
    { nome: "Drogaria Queluz", cidade: "Queluz", endereco: "Rua D, 65" },
    { nome: "Farmácia Redenção", cidade: "Redenção da Serra", endereco: "Centro, 22" },
    { nome: "Farmácia Roseira", cidade: "Roseira", endereco: "Rua E, 33" },
    { nome: "Drogaria Branca", cidade: "Santa Branca", endereco: "Centro, 44" },
    { nome: "Farmácia Pinhal", cidade: "Santo Antônio do Pinhal", endereco: "Rua F, 77" },
    { nome: "Farmácia Sapucaí", cidade: "São Bento do Sapucaí", endereco: "Centro, 88" },
    { nome: "Drogaria Barreiro", cidade: "São José do Barreiro", endereco: "Rua G, 66" },
    { nome: "Farmácia SJC", cidade: "São José dos Campos", endereco: "Av. Brasil, 456" },
    { nome: "Farmácia Paraitinga", cidade: "São Luiz do Paraitinga", endereco: "Centro, 99" },
    { nome: "Drogaria Litoral Norte", cidade: "São Sebastião", endereco: "Av. Mar, 350" },
    { nome: "Farmácia Silveiras", cidade: "Silveiras", endereco: "Rua H, 20" },
    { nome: "Farmácia Taubaté", cidade: "Taubaté", endereco: "Rua A, 123" },
    { nome: "Drogaria Tremembé", cidade: "Tremembé", endereco: "Centro, 110" },
    { nome: "Farmácia Ubatuba", cidade: "Ubatuba", endereco: "Av. Praia, 600" }
];

// EVENTOS
const eventos = [
    { cidade: "Taubaté", evento: "Vacinação contra gripe", data: "06/06/2026" },
    { cidade: "São José dos Campos", evento: "Campanha contra dengue", data: "02/06/2026" }
];

// CIDADES
const cidades = [...new Set(farmacias.map(f => f.cidade))];

// ================= ELEMENTOS =================
const divFarmacias = document.getElementById("farmacias");
const divEventos = document.getElementById("eventos");
const inputBusca = document.getElementById("pesquisa");
const sugestoesBox = document.getElementById("sugestoes");

const bcCidade = document.getElementById("bc-cidade");
const bcInicio = document.getElementById("bc-inicio");

// ================= FUNÇÕES =================

// FARMÁCIAS
function carregarFarmacias(filtro = "") {
    divFarmacias.innerHTML = "";

    const resultado = farmacias.filter(f =>
        f.cidade.toLowerCase().includes(filtro.toLowerCase())
    );

    if (resultado.length === 0) {
        divFarmacias.innerHTML = `<div class="item">Nenhuma farmácia cadastrada.</div>`;
        return;
    }

    resultado.forEach(f => {
        divFarmacias.innerHTML += `
            <div class="item">
                <strong>${f.nome}</strong>
                ${f.cidade}<br>
                ${f.endereco}
            </div>
        `;
    });
}

// EVENTOS
function carregarEventos(filtro = "") {
    divEventos.innerHTML = "";

    const resultado = eventos.filter(e =>
        e.cidade.toLowerCase().includes(filtro.toLowerCase())
    );

    if (resultado.length === 0) {
        divEventos.innerHTML = `<div class="item">Nenhum evento disponível.</div>`;
        return;
    }

    resultado.forEach(e => {
        divEventos.innerHTML += `
            <div class="item">
                <strong>${e.evento}</strong>
                ${e.cidade}<br>
                Data: ${e.data}
            </div>
        `;
    });
}

// ================= AUTOCOMPLETE =================
let selecionado = -1;

inputBusca.addEventListener("input", () => {
    const valor = inputBusca.value.toLowerCase();
    sugestoesBox.innerHTML = "";
    selecionado = -1;

    if (valor === "") {
        carregarFarmacias();
        carregarEventos();
        bcCidade.textContent = "";
        return;
    }

    const filtradas = cidades
        .filter(c => c.toLowerCase().includes(valor))
        .slice(0, 8);

    if (filtradas.length === 0) {
        sugestoesBox.innerHTML = `<div class="sugestao">Nenhuma cidade encontrada</div>`;
        return;
    }

    filtradas.forEach(cidade => {
        const div = document.createElement("div");
        div.classList.add("sugestao");

        const regex = new RegExp(`(${valor})`, "gi");
        div.innerHTML = cidade.replace(regex, "<strong>$1</strong>");

        div.onclick = () => selecionarCidade(cidade);

        sugestoesBox.appendChild(div);
    });

    carregarFarmacias(valor);
    carregarEventos(valor);
});

// TECLADO
inputBusca.addEventListener("keydown", (e) => {
    const sugestoes = document.querySelectorAll(".sugestao");

    if (e.key === "ArrowDown") {
        selecionado++;
        if (selecionado >= sugestoes.length) selecionado = 0;
        atualizarSelecao(sugestoes);
    }

    if (e.key === "ArrowUp") {
        selecionado--;
        if (selecionado < 0) selecionado = sugestoes.length - 1;
        atualizarSelecao(sugestoes);
    }

    if (e.key === "Enter" && selecionado >= 0) {
        selecionarCidade(sugestoes[selecionado].innerText);
    }
});

// SELEÇÃO + BREADCRUMB
function selecionarCidade(cidade) {
    inputBusca.value = cidade;
    sugestoesBox.innerHTML = "";

    bcCidade.textContent = cidade;

    carregarFarmacias(cidade);
    carregarEventos(cidade);
}

// VISUAL
function atualizarSelecao(lista) {
    lista.forEach((el, i) => {
        el.style.background = i === selecionado ? "#B2DFDB" : "";
    });
}

// CLICK FORA
document.addEventListener("click", (e) => {
    if (!e.target.closest(".autocomplete")) {
        sugestoesBox.innerHTML = "";
    }
});

// RESET
bcInicio.addEventListener("click", () => {
    inputBusca.value = "";
    bcCidade.textContent = "";
    carregarFarmacias();
    carregarEventos();
});

// INICIAL
carregarFarmacias();
carregarEventos();