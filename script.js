// Pegando os componentes da página
const add = document.querySelector("#btnAdd");
const clean = document.querySelector("#btnClean");
const divItem = document.querySelector(".divItens");
const form = document.querySelector("#formItens");

function adicionar() {
    if (form.value == "") {
        alert(
            "Escreva o nome do item que deseja adicionar a lista de compras!"
        );
    } else {
        let item = form.value;
        divItem.innerHTML += `<p><li>${item}</li></p>`;
        form.value = "";
    }
}

add.addEventListener("click", adicionar);

// Limpando a lista de itens
clean.addEventListener("click", function () {
    divItem.innerHTML = "";
});

// Configurando a tecla Enter (desativa o envio de formulário para não recarregar a página e executa a função adicionar)
form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        adicionar();
    }
});

// Marcando um item como concluído
divItem.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
});
