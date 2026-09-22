async function carregarDados() {
    const url = "https://psychic-space-memory-96jv9vrvwg54fx6pv-3000.app.github.dev/";

    const resposta = await fetch(url);

    const dados = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

     listaProdutos.innerHTML = `
        <div class="card-produto">
            <img src="${dados.imagem}" alt="${dados.nome}">

            <div class="conteudo-card">
                <h2>${dados.nome}</h2>

                <p class="categoria">
                    <strong>Categoria:</strong> ${dados.categoria}
                </p>

                <p class="preco">
                    R$ ${dados.preco}
                </p>
            </div>
        </div>
    `;
}

carregarDados();